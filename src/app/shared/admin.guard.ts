import { Injectable } from '@angular/core';
import * as CONST from '../core/constants';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../core/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {
  user = this.authService.getLocalStorage(CONST.LocalStorage.USER_INFO);
  constructor(private router: Router, private authService: AuthService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.user) {
      return true;
    } else {
      this.intPage();
    }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.user) {
      return true;
    } else {
      this.intPage();
    }
  }

  intPage() {
   return this.router.navigate([CONST.frontendUrl.AUTH + '/' + CONST.frontendUrl.LOGIN]);
  }

}
