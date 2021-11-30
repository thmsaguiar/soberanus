import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Product } from 'src/app/models/Product';
import { Venda } from 'src/app/models/Venda';
import { StorageService } from 'src/app/services/storage.service';

interface ITotal {
  totalPrice: number;
}

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})

export class InitialPage implements OnInit {

  venda: Venda = new Venda();

  public id: string;

  public produtosVenda: Product[] = [];

  public vTotal: ITotal = {
    totalPrice: 0
  };

  public products: Product[];

  constructor(public router: Router, private alertCtrl: AlertController, private storageService: StorageService) { }

  ngOnInit() {
    this.criarProdutos();
  }

  async aumentar(product: Product, total: ITotal): Promise<void> {
    // eslint-disable-next-line eqeqeq
    if (product.quantidade == 0 && product.name == '03. Cerveja') {
      const alert = await this.alertCtrl.create({
        header: 'Bebidas alcóolicas apenas para maiores de 18 anos.',
        buttons: ['OK']
      });
      alert.present();
    }

    product.quantidade++;
    total.totalPrice += product.price;
  }

  diminuir(product: Product, total: ITotal): void {
    if (product.quantidade > 0) {
      product.quantidade--;
      if (total.totalPrice > 0) {
        total.totalPrice -= product.price;
      }
    }
  }

  ionViewDidEnter() {
    this.criarProdutos();
  }

  criarProdutos() {
    this.products = [{
      name: '01. Hot-Dog',
      description: 'Salsicha viena, batata palha, cheddar, farofa de bacon, ketchup e mostarda.',
      price: 10,
      quantidade: 0
    },
    {
      name: '02. X-Salada',
      description: 'Burger 120g angus, american cheese, picles, alface americano, tomate e molho especial.',
      price: 12,
      quantidade: 0
    },
    {
      name: '03. X-Bacon',
      description: 'Burger 120g angus, american cheese, fatias de bacon crocantes e cebola caramelizada.',
      price: 14,
      quantidade: 0
    },
    {
      name: '04. X-Tudo',
      description: 'Burger 120g angus, bacon, presunto, 4 queijos, ovo, picles, alface americano, tomate e molho especial.',
      price: 18,
      quantidade: 0
    },
    {
      name: '05. X-Vegan',
      description: 'Burger falafel, queijo de mandioca, rúcula, tomate cereja e molho especial vegano.',
      price: 16,
      quantidade: 0
    },
    {
      name: '01. Coca-Cola',
      description: 'Garrafa de vidro 250ml.',
      price: 6,
      quantidade: 0
    },
    {
      name: '02. Suco Natural',
      description: 'Laranja, abacaxi, morango, maracuja, limão, etc.',
      price: 7,
      quantidade: 0
    },
    {
      name: '03. Cerveja',
      description: 'Skol, Brahma, Itaipava, Heineken, etc.',
      price: 5,
      quantidade: 0
    }
    ];
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
        header: 'Efetue o pagamento!',
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

}
