import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarProjetoPage } from './cadastrar-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarProjetoPageRoutingModule {}
