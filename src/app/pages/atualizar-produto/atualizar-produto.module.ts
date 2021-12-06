import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarProdutoPageRoutingModule } from './atualizar-produto-routing.module';

import { AtualizarProdutoPage } from './atualizar-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarProdutoPageRoutingModule
  ],
  declarations: [AtualizarProdutoPage]
})
export class AtualizarProdutoPageModule {}
