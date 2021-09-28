import { Component, OnInit } from '@angular/core';

// Interface Produtos
interface IProducts{
  name: string;
  price: number;
  quantidade: number;
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
      price: 10,
      quantidade: 0
    },
    {
      name: 'X-Salada',
      price: 12,
      quantidade: 0
    },
    {
      name: 'X-Bacon',
      price: 14,
      quantidade: 0
    },
    {
      name: 'X-Tudo',
      price: 18,
      quantidade: 0
    },
    {
      name: 'X-Vegan',
      price: 8,
      quantidade: 0
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  aumentar(product: IProducts): void {
    product.quantidade++;
  }

  diminuir(product: IProducts): void {
    if(product.quantidade > 0) {
      product.quantidade--;
    }
  }
}
