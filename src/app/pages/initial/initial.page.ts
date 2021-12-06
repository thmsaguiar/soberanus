import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Venda } from 'src/app/models/Venda';
import { StorageService } from 'src/app/services/storage.service';

interface ITotal {
  totalPrice: number;
}

interface IProduto{
  id: number;
  name: string;
  description: string;
  price: number;
  quantidade: number;
}

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})

export class InitialPage implements OnInit {

  public venda: Venda = new Venda();

  public url = 'http://localhost:3000/products';

  public id: string;

  public name: string;
  public description: string;
  public price: number;
  public quantidade: number;

  public vTotal: ITotal = {
    totalPrice: 0
  };

  public products: IProduto[] = [];

  public produtosApi: IProduto[] = [];

  public produtosVenda: IProduto[] = [];

  constructor(
    public router: Router,
    private alertCtrl: AlertController,
    private storageService: StorageService) { }

  ngOnInit() {
    this.criarProdutos();
  }

  ionViewDidEnter() {
    this.buscar();
  }

  async aumentar(product: IProduto, total: ITotal): Promise<void> {
    // eslint-disable-next-line eqeqeq
    if (product.quantidade == 0 && product.name == 'Cerveja') {
      const alert = await this.alertCtrl.create({
        header: 'Bebidas alcóolicas apenas para maiores de 18 anos.',
        buttons: ['OK']
      });
      alert.present();
    }

    product.quantidade++;
    total.totalPrice += Number(product.price);
  }

  diminuir(product: IProduto, total: ITotal): void {
    if (product.quantidade > 0) {
      product.quantidade--;
      if (total.totalPrice > 0) {
        total.totalPrice -= Number(product.price);
      }
    }
  }

  criarProdutos() {
    this.products = this.produtosApi;
  }

  async finish() {
    for (const iv of this.produtosVenda) {
      // eslint-disable-next-line eqeqeq
      if (iv.quantidade != 0) {
        this.produtosVenda.splice(this.produtosVenda.indexOf(iv));
      }
    }
    // eslint-disable-next-line eqeqeq
    if (this.vTotal.totalPrice != 0) {
      this.criarVenda();
      const alert = await this.alertCtrl.create({
        header: 'Venda Finalizada!',
        buttons: ['OK']
      });
      alert.present();
      this.router.navigateByUrl('/pages/detalhes/' + this.id);
    }
    this.vTotal.totalPrice = 0;
  }

  async criarVenda() {
    for (const i of this.products) {
      if (i.quantidade > 0) {
        this.produtosVenda.push(i);
      }
    }
    const data = new Date();
    const random = Math.floor(Math.random() * 999);
    this.venda.id = random + 'V';
    this.venda.produtos = this.produtosVenda;
    this.venda.total = this.vTotal.totalPrice;
    this.venda.data = data;
    this.id = this.venda.id;
    await this.storageService.set(this.venda.id, this.venda);
  }

  async salvar(): Promise<void> {
    const novo = {
      name: this.name,
      description: this.description,
      price: this.price,
      quantidade: this.quantidade
    };

    console.log(Object.keys(novo));

    const body = Object.keys(novo)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(novo[k])}`)
      .join('&');

    await fetch(this.url, { method: 'POST', body: new URLSearchParams(body) });
    this.buscar();
  }

  async buscar(): Promise<void> {
    const resposta = await fetch(this.url);
    this.produtosApi = await resposta.json();
    this.products = await this.produtosApi;
  }

  async atualizar(id: number): Promise<void> {
    const produtoAtualizado = {
      name: this.name,
      description: this.description,
      price: this.price,
      quantidade: this.quantidade
    };

    const body = Object.keys(produtoAtualizado)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(produtoAtualizado[k])}`)
      .join('&');

    await fetch(`${this.url}/${id}`, { method: 'PUT', body: new URLSearchParams(body) });
    this.buscar();
  }

  async remover(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, { method: 'DELETE' });
    this.buscar();
  }

}
