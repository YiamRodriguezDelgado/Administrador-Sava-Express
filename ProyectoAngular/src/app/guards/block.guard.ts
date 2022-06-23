import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BlockGuard implements CanActivate {

  constructor (
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (!this.authService.isExpired()) {
      this.router.navigate(['inicio/login']);
      return false;
    }
    return true;
  }
  
}
