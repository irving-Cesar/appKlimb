import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarUsuarioPageRoutingModule } from './cadastrar-usuario-routing.module';

import { CadastrarUsuarioPage } from './cadastrar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarUsuarioPageRoutingModule
  ],
  declarations: [CadastrarUsuarioPage]
})
export class CadastrarUsuarioPageModule {}
