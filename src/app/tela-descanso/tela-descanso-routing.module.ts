import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaDescansoPage } from './tela-descanso.page';

const routes: Routes = [
  {
    path: '',
    component: TelaDescansoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaDescansoPageRoutingModule {}
