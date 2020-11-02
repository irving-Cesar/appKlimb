import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarUsuarioPage } from './cadastrar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarUsuarioPageRoutingModule {}
