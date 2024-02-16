import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthentificationService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('Guard is running'); // Agrega este console.log
    if (this.authService.isLoggedIn) {
      return true; // El usuario está autenticado
    } else {
      // Redirige al usuario a la página de inicio de sesión
      this.router.navigate(['/login']);
      return false; // El usuario no está autenticado
    }
  }


}