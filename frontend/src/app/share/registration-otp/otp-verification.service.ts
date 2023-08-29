import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { ApiService } from 'src/app/common-service/api.service';
interface Iotpset{
  email:string;
  phone:string
}
@Injectable({
  providedIn: 'root'
})
export class OtpVerificationService {

  constructor(private api:ApiService) { }

  otpSubmit(otpSet:Iotpset){
    let url:string = '/auth/verify'
    const payload:any = new Object();
    payload.otp_email = otpSet.email;
    payload.otp_phone = otpSet.phone;

    return this.api.ApiCallWithLocalization(payload,url,'post')
  }
  public logoutSuccess = new Subject()
  public loginflow=new Subject()

}
