import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermosPage } from './termos.page';

const routes: Routes = [
  {
    path: '',
    component: TermosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermosPageRoutingModule {}
