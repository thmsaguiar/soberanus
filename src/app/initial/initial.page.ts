import { Component, OnInit } from '@angular/core';

// Interface Produtos
interface IProducts{
  name: string;
  description: string;
  price: number;
  quantidade: number;
}

interface ITotal {
  totalPrice: number;
}

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})

export class InitialPage implements OnInit {
  public vTotal: ITotal = {
    totalPrice: 0
  };

  public products: IProducts [] = [
    {
      name: '01. Hot-Dog',
      description: 'Salsicha viena, batata palha, cheddar, farofa de bacon catchup e mostarda.',
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
      description: 'Burger 120g angus, american cheese, fatias de bacon crocantes e cebola caramelisada.',
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
      description: 'Burger falafel, queijo de mandioca, rucula, tomate cereja e molho especial vegano.',
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

  constructor() {}

  ngOnInit() {
  }

  aumentar(product: IProducts, total: ITotal): void {
    product.quantidade++;
    total.totalPrice += product.price;
  }

  diminuir(product: IProducts, total: ITotal): void {
    if(product.quantidade > 0) {
      product.quantidade--;
      total.totalPrice -= product.price;
    }
  }
}