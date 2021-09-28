import { Component, OnInit } from '@angular/core';

// Interface Produtos
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
  public products: IProducts [] = [
    {
      name: 'Hot-Dog',
      price: 10
    },
    {
      name: 'X-Salada',
      price: 12
    },
    {
      name: 'X-Bacon',
      price: 14
    },
    {
      name: 'X-Tudo',
      price: 18
    },
    {
      name: 'X-Vegan',
      price: 8
    }
  ];

  constructor() {}

  ngOnInit() {
  }


}
