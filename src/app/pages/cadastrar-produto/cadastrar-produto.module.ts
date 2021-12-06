import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarProdutoPageRoutingModule } from './cadastrar-produto-routing.module';

import { CadastrarProdutoPage } from './cadastrar-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarProdutoPageRoutingModule
  ],
  declarations: [CadastrarProdutoPage]
})
export class CadastrarProdutoPageModule {}
