import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Forms, input, layOutOfPage } from 'src/app/core/model/Auth';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  errorMessage!: string;
  successMessage!: string;
  buttonStatus: boolean = true;
  objectOfPage: layOutOfPage = {
    nameOfPage: 'Create new account',
    titleOfPage: 'Registration!',
    buttonOfPage: 'Sign Up',
    text1: 'Already have an account? Login',
    text2: 'By signing below, you agree to the. Team of use . and . privacy notice',
    routing: '/login',
  };
  inputs: input[] = [
    {
      name: 'username',
      id: 'email_id',
      p_h: 'Email Address',
      ngModul: '',
      type: 'email',
      icon: 'icon-email',
    },
    {
      name: 'password',
      id: 'password_id',
      p_h: 'Password',
      ngModul: '',
      type: 'password',
      icon: 'icon-passwword',
    },
    {
      name: 'Confirm_Password',
      id: 'Confirm _id',
      p_h: 'Confirm Password',
      ngModul: '',
      type: 'password',
      icon: 'icon-passwword',
    },
  ];
  constructor(private _Auth: AuthService) {}

  Registration(event: Forms) {
    this.buttonStatus = false;
    this._Auth
      .Registration(event)
      .pipe(
        catchError((error) => {
          if (error.status === 401) {
            this.errorMessage = `<p class="m-0 d-flex flex-column">
            <span class="text-main font-Bold-s20"> Oops ! </span> 
            <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
            ${error.error}
            </span>
            </p>`;
          } else if (error.status === 500) {
            this.errorMessage = `<p class="m-0 d-flex flex-column">
            <span class="text-main font-Bold-s20"> Oops ! </span> 
            <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
            Looks like something went wrong, We are sorry.
            </span>
            </p>`;
          } else if (error.status === 404) {
            this.errorMessage = `<p class="m-0 d-flex flex-column">
            <span class="text-main font-Bold-s20"> Oops ! </span> 
            <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
            Looks like something went wrong 
            </span>
            </p>`;
          }
          // Return an observable with a user-facing error message
          return of(null);
        })
      )
      .subscribe((response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response));
          this.successMessage = `<p class="m-0 d-flex flex-column">
            <span class="text-main font-Bold-s20"> Welcome ! </span> 
            <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
              MR: El_Behairy
            </span>
            </p>
          `;
        }
      });
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
      this.buttonStatus = true;
    }, 2000);
  }
}
