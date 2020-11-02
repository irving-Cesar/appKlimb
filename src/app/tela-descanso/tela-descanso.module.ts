import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaDescansoPageRoutingModule } from './tela-descanso-routing.module';

import { TelaDescansoPage } from './tela-descanso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaDescansoPageRoutingModule
  ],
  declarations: [TelaDescansoPage]
})
export class TelaDescansoPageModule {}
