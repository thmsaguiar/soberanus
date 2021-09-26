import { Component, OnInit } from '@angular/core';

//Interface Produtos
interface IProducts{
  name: string;
  price: number;
}

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit {

  public products: IProducts = {
    name: 'Hot dog', 
    price: 12
  };

  constructor() { }

  ngOnInit() {
  }

}
