import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistroUsuarioPageRoutingModule } from './resgistro-usuario-routing.module';

import { ResgistroUsuarioPage } from './resgistro-usuario.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgistroUsuarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ResgistroUsuarioPage]
})
export class ResgistroUsuarioPageModule {}
