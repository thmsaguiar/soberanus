import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtualizarProdutoPage } from './atualizar-produto.page';

const routes: Routes = [
  {
    path: '',
    component: AtualizarProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtualizarProdutoPageRoutingModule {}
