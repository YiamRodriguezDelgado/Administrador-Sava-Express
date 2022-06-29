import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if(!this.authService.isExpired()){
      return true;
    }
    
    const token = localStorage.getItem('token');
    const rol: string = decode(token);

    if (rol["rol"] == 1) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['inicio']);
    }

    return false;

  }
  
}
