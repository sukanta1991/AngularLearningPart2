import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

// class to implement route guard for particular routes
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}

  // Implement 'canActivate' method for Route Guard
  canActivate(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
