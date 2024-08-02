import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Forms, input, layOutOfPage } from 'src/app/core/model/Auth';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  errorMessage!: string;
  successMessage!: string;
  buttonStatus: boolean = true;
  objectOfPage: layOutOfPage = {
    nameOfPage: 'Forget your password',
    titleOfPage: 'Forget Password!',
    buttonOfPage: 'Continue',
    text3: 'Please enter your email address below you will receive a verification link',
    text1: 'Remembered your password? Login',
    routing: '/login',
  };
  inputs: input[] = [
    {
      name: 'email',
      id: 'email_id',
      p_h: 'Email Address',
      ngModul: '',
      type: 'email',
      icon: 'icon-email',
      req:true,
      pattern:'',
      errorPattern:'Invalid email address'
    },
  ];
  constructor(private _Auth: AuthService ,private _Router:Router) {}

  ForgetPassword(event: Forms) {
    this.buttonStatus = false;
   this._Auth
      .ForgetPassword(event)
      .then(res => {
        this._Router.navigate(['/ResetPassworfd '])
        this.successMessage = `<p class="m-0 d-flex flex-column">
            <span class="text-main font-Bold-s20"> Welcome ! </span> 
            <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
              MR: El_Behairy
            </span>
            </p>
          `;
      })
      .catch(err => {
              this.errorMessage = `<p class="m-0 d-flex flex-column">
            <span class="text-main font-Bold-s20"> Oops ! </span> 
            <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
              ${err.message.split(':')[1].split('.')[0]}
            </span>
            </p>`;
      })
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
      this.buttonStatus = true;
    }, 2000);
  }
}

