import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private routerService: Router, private alertifyService: AlertifyService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.alertifyService.error('You need to log in first!');
    this.routerService.navigate(['/home']);
    return false;
  }
}
