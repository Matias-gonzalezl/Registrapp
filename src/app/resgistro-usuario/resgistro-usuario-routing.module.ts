import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgistroUsuarioPage } from './resgistro-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistroUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistroUsuarioPageRoutingModule {}
