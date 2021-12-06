import { Component, OnInit } from '@angular/core';
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
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})
export class CadastrarProdutoPage implements OnInit {

  public url = 'http://localhost:3000/products';
  public rota: ActivatedRoute;

  public id: string;

  public name: string;
  public description: string;
  public price: number;
  public quantidade = 0;

  public produtosApi: IProduto[] = [];

  constructor(public router: ActivatedRoute, private alertCtrl: AlertController, public routers: Router){
    this.rota = router;
  }

  ngOnInit() {
    this.buscar();
  }
  ionViewDidEnter() {
    this.buscar();
  }

  async buscar(): Promise<void> {
    const resposta = await fetch(this.url);
    this.produtosApi = await resposta.json();
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

    const alert = await this.alertCtrl.create({
      header: 'Produto Criado!',
      buttons: ['Ok']
    });
    alert.present();
  }

}
