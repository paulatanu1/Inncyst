import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import ls from 'localstorage-slim';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/common-service/api.service';

interface IformData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  url: string = '';
  private previousUrl!: string;
  private currentUrl: string;
  constructor(private api: ApiService, private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      }
    });
  }
  public loginModal = new Subject();
  public forgotPassword = new Subject();
  public forgotPasswordOtp = new Subject();
  public resetPassword = new Subject();
  public closePopup = new Subject();

  public getPreviousUrl() {
    return this.currentUrl;
  }

  login(userEmail: string, password: string) {
    this.url = '/auth/login';
    // const form_data: IformData = new Object();
    // const payload = new FormData()
    //   payload.append('email',userEmail as string),
    //   payload.append('password',password as string)
    //   payload.append('role',userRole.toLowerCase() as string)

    const form_data: any = new Object();
    ls.set('userEmail', userEmail);
    form_data.email = userEmail;
    form_data.password = password;
    // form_data.role = userRole.toLowerCase() as string;
    return this.api.ApiCallWithLocalization(form_data, this.url, 'post');
  }

  socialLogin(payload: any) {
    let url = '/auth/social/login';
    let data = {
      role: payload.role,
      loginType: payload.type,
      userdata: payload.auth0Data,
    };
    return this.api.ApiCallWithLocalization(data, url, 'post');
  }

  forgetpassword(email: string) {
    this.url = '/auth/forget-password';
    const form_data: any = new Object();
    form_data.email = email;
    return this.api.ApiCallWithLocalization(form_data, this.url, 'post');
  }
  passwordReset(resetPasswordSet: any) {
    this.url = '/auth/change-forget-password';
    const form_data: any = new Object();
    form_data.email = resetPasswordSet.email;
    form_data.newPassword = resetPasswordSet.newPassword;
    form_data.password = resetPasswordSet.password;
    return this.api.ApiCallWithLocalization(form_data, this.url, 'put');
  }

  changePassword(data: any) {
    let url = '/auth/change-password';
    // const form_data:any = new FormData();
    // form_data.append('old_password',data.oldPassword)
    // form_data.append('new_password',data.confirmPassword)
    const form_data: any = new Object();
    form_data.old_password = data.oldPassword;
    form_data.new_password = data.confirmPassword;
    return this.api.ApiCallWithLocalization(form_data, url, 'post');
  }
}
