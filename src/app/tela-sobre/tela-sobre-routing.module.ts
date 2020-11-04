import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelaSobrePage } from './tela-sobre.page';

const routes: Routes = [
  {
    path: '',
    component: TelaSobrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelaSobrePageRoutingModule {}
