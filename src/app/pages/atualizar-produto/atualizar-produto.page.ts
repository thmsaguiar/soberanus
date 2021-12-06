import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface IProduto{
  id: number;
  name: string;
  description: string;
  price: number;
  quantidade: number;
}

@Component({
  selector: 'app-atualizar-produto',
  templateUrl: './atualizar-produto.page.html',
  styleUrls: ['./atualizar-produto.page.scss'],
})
export class AtualizarProdutoPage implements OnInit {
  public url = 'http://localhost:3000/products';
  public rota: ActivatedRoute;

  public id: string;

  public name: string;
  public description: string;
  public price: number;
  public quantidade = 0;

  public produtosApi: IProduto[] = [];

  public produto: IProduto;

  constructor(public router: ActivatedRoute, private alertCtrl: AlertController, public routers: Router){
    this.rota = router;
  }

  ngOnInit() {
    this.id = this.rota.snapshot.paramMap.get('id');
    this.buscar();
    this.buscarPorId(this.id);
  }
  ionViewDidEnter() {
    this.buscar();
  }

  async buscar(): Promise<void> {
    const resposta = await fetch(this.url);
    this.produtosApi = await resposta.json();
  }

  async buscarPorId(id: string): Promise<void> {
    const resposta = await fetch(`${this.url}/${id}`);
    this.produto = await resposta.json();

    this.name = this.produto.name;
    this.description = this.produto.description;
    this.price = this.produto.price;
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

    const alert = await this.alertCtrl.create({
      header: 'Produto Atualizado!',
      buttons: ['Ok']
    });
    alert.present();
  }

}
