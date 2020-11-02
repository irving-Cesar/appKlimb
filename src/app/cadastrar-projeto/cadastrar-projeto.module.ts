import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarProjetoPageRoutingModule } from './cadastrar-projeto-routing.module';

import { CadastrarProjetoPage } from './cadastrar-projeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarProjetoPageRoutingModule
  ],
  declarations: [CadastrarProjetoPage],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class CadastrarProjetoPageModule {}
