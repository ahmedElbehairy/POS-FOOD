import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Forms, input, layOutOfPage } from 'src/app/core/model/Auth';
import { AuthService } from 'src/app/core/service/auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  errorMessage!: string;
  successMessage!: string;
  
  buttonStatus: boolean = true;
  objectOfPage: layOutOfPage = {
    nameOfPage: 'Create new password',
    titleOfPage: 'Reset Password!',
    buttonOfPage: 'Change Password',
    text1: 'Remembered your password? Login',
    routing: '/login',
  };
  inputs: input[] = [
    {
      name: 'password',
      id: 'password_id',
      p_h: 'New Password',
      ngModul: '',
      type: 'password',
      icon: 'icon-passwword',
      req:true,
      pattern:'',
      errorPattern:'Invalid email address'
    },
    {
      name: 'Confirm_Password',
      id: 'Confirm_Password_id',
      p_h: 'Confirm Password',
      ngModul: '',
      type: 'password',
      icon: 'icon-passwword',
      req:true,
      pattern:'',
      errorPattern:'Invalid email address'
    },
  ];
  constructor(private _Auth: AuthService) {}

  ResetPassword(event: Forms) {
    this.buttonStatus = false;
    this._Auth
      .ResetPassword(event)
      .then(res => console.log(res), err => {
        console.log(err);
      })
      // .catch(err => console.log(err))
      // .pipe(
      //   catchError((error) => {
      //     if (error.status === 401) {
      //       this.errorMessage = `<p class="m-0 d-flex flex-column">
      //       <span class="text-main font-Bold-s20"> Oops ! </span> 
      //       <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
      //       ${error.error}
      //       </span>
      //       </p>`;
      //     } else if (error.status === 500) {
      //       this.errorMessage = `<p class="m-0 d-flex flex-column">
      //       <span class="text-main font-Bold-s20"> Oops ! </span> 
      //       <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
      //       Looks like something went wrong, We are sorry.
      //       </span>
      //       </p>`;
      //     }else if (error.status === 404) {
      //       this.errorMessage = `<p class="m-0 d-flex flex-column">
      //       <span class="text-main font-Bold-s20"> Oops ! </span> 
      //       <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
      //       Looks like something went wrong 
      //       </span>
      //       </p>`;
      //     }
      //     // Return an observable with a user-facing error message
      //     return of(null);
      //   })
      // )
      // .subscribe((response) => {
      //   if (response) {
      //     localStorage.setItem('user', JSON.stringify(response));
      //     this.successMessage = `<p class="m-0 d-flex flex-column">
      //       <span class="text-main font-Bold-s20"> Welcome ! </span> 
      //       <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
      //         MR: El_Behairy
      //       </span>
      //       </p>
      //     `;
      //   }
      // });
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
      this.buttonStatus = true;
    }, 2000);
  }
}
