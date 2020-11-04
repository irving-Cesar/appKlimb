import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TelaSobrePageRoutingModule } from './tela-sobre-routing.module';

import { TelaSobrePage } from './tela-sobre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TelaSobrePageRoutingModule
  ],
  declarations: [TelaSobrePage]
})
export class TelaSobrePageModule {}
