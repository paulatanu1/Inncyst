import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { LoginApiService } from './login-api.service';
import { OtpVerificationService } from '../registration-otp/otp-verification.service';
import { Router } from '@angular/router';
interface options {
  name: string,
  code: string
}

interface IloginOptionType{
  title:string;
  code:number
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  options: options[];
  loginForm!: FormGroup;
  loginOptionType:IloginOptionType[]

  //Output
  @Output() openRegisterFlow = new EventEmitter()

  constructor(private fb: FormBuilder,private loginService:LoginApiService,private otpVerifivation:OtpVerificationService,private router:Router) {
    this.options = [
      {name: 'Select the option', code: '0'}
  ];

  this.loginOptionType = 
    [
    {title:'Student',code:0},
    {title:'Industry',code:1}]
    }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(6)]],
      options:['Student',[Validators.required],this.validPassword.bind(this)],
      
    },{
      // validators: MustMatch('password', 'confirmPassword')
      
    });
  }

  validPassword(control: AbstractControl) {
    return of('' === control.value).pipe(
      map(result => result ? { invalid: true } : null)
    );
  }

  onLoginSubmit(){
  console.log(this.loginForm.controls)
  if(this.loginForm.valid){
  let userEmail:string = this.loginForm.get('email')?.value;
  let password = this.loginForm.get('password')?.value
  let userRole = this.loginForm.get('options')?.value

  this.loginService.login(userEmail,password,userRole).subscribe({
    next:(res)=>{
      console.log(res)
     this.otpVerifivation.loginflow.next(false);
     this.otpVerifivation.logoutSuccess.next(true);
         if(userRole === 'Student'){
          this.router.navigateByUrl('/jobs/internships');
          // this.router.navigate(['/jobs/internship']);
         }
         else if(userRole === 'Student' ){
          this.router.navigate(['industry']);
         }
    },
    error: (err)=>{
      console.log(err)
alert('User Not Found!!!!!');
this.otpVerifivation.loginflow.next(false);
this.router.navigateByUrl('/home');
    }
  }
  )
}


  }

  loginPanelOpen(){
    this.openRegisterFlow.emit(true);
  }

}
function observableOf(arg0: boolean) {
  throw new Error('Function not implemented.');
}

