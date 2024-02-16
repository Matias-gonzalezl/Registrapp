import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../app/services/user.guard';
const routes: Routes = [
  {
    path: 'home',
    canActivate: [UserGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'api',
    canActivate: [UserGuard],
    loadChildren: () => import('./api/api.module').then( m => m.ApiPageModule)
  },
  {
    path: 'resgistro-usuario',
    loadChildren: () => import('./resgistro-usuario/resgistro-usuario.module').then( m => m.ResgistroUsuarioPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
