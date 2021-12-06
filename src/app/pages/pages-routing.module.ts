import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: 'initial',
        loadChildren: () => import('./initial/initial.module').then( m => m.InitialPageModule)
      },
      {
        path: 'record',
        loadChildren: () => import('./record/record.module').then( m => m.RecordPageModule)
      },
      {
        path: 'detalhes/:id',
        loadChildren: () => import('./detalhes/detalhes.module').then( m => m.DetalhesPageModule)
      },
      {
        path: 'products-list',
        loadChildren: () => import('./products-list/products-list.module').then( m => m.ProductsListPageModule)
      },
      {
        path: 'atualizar-produto/:id',
        loadChildren: () => import('./atualizar-produto/atualizar-produto.module').then( m => m.AtualizarProdutoPageModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
