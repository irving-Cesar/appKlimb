import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarProjetoPage } from './visualizar-projeto.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarProjetoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarProjetoPageRoutingModule {}
