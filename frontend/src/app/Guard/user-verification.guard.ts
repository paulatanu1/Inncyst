import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import ls from 'localstorage-slim';
import { ToastServiceService } from '../service/toast-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserVerificationGuard implements CanActivate {
  userType!: string;
  login_token!: string;
  constructor(private _toast: ToastServiceService, private router: Router) {
    this.userType = <string>ls.get('role');
    this.login_token = <string>ls.get('login_token');
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //Allow access if userType = student
    console.log(this.userType,'28',ls.get('role'))
    if (this.userType == 'candidate') {
      return true;
    } else {
      //prevent allow access if userType is !=student
      this._toast.showToaster.next({
        severity: 'error',
        summary: 'error',
        detail: 'Access Denied: You do not have permission to view this page. ',
      });
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
