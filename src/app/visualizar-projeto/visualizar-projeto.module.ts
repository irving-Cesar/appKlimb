import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarProjetoPageRoutingModule } from './visualizar-projeto-routing.module';

import { VisualizarProjetoPage } from './visualizar-projeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarProjetoPageRoutingModule
  ],
  declarations: [VisualizarProjetoPage]
})
export class VisualizarProjetoPageModule {}
