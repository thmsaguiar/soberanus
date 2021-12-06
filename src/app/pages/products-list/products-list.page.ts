import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface IProduto{
  id: number;
  name: string;
  description: string;
  price: number;
  quantidade: number;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {

  public url = 'http://localhost:3000/products';

  public id: string;

  public name: string;
  public description: string;
  public price: number;
  public quantidade = 0;

  public produtosApi: IProduto[] = [];

  constructor(public router: ActivatedRoute,private alertCtrl: AlertController){}


  ionViewDidEnter(){
    this.buscar();
  }

  ngOnInit() {
    this.buscar();
  }

  async buscar(): Promise<void> {
    const resposta = await fetch(this.url);
    this.produtosApi = await resposta.json();
  }

  async remover(id: number): Promise<void> {
    await fetch(`${this.url}/${id}`, { method: 'DELETE' });
    this.buscar();
  }


}
