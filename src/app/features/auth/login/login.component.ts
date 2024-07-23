import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Forms, input, layOutOfPage } from 'src/app/core/model/Auth';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  errorMessage!: string;
  successMessage!: string;
  buttonStatus: boolean = true;
  objectOfPage: layOutOfPage = {
    nameOfPage: 'Login to your account',
    titleOfPage: 'Welcome Back!',
    buttonOfPage: 'Login',
    text: 'Forget Password?',
    text1: 'Don’t have an account? Sign Up',
    routing: '/SignUp',
    routing1: '/ForgetPassword',
  };
  inputs: input[] = [
    {
      name: 'email',
      id: 'email_id',
      p_h: 'Email Address',
      ngModul: '',
      type: 'email',
      icon: 'icon-email',
      req: true,
      pattern:'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
      errorPattern: 'Invalid email address',
    },
    {
      name: 'password',
      id: 'password_id',
      p_h: 'Password',
      ngModul: '',
      type: 'password',
      icon: 'icon-passwword',
      req: true,
      pattern:'',
      errorPattern: '',
    },
  ];
  constructor(private _Auth: AuthService, private _router: Router) {}

  Login(event: Forms) {
    this.buttonStatus = false;
    this._Auth
      .login(event)
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data.user?.uid));
        this.successMessage = `<p class="m-0 d-flex flex-column">
          <span class="text-main font-Bold-s20"> Welcome ! </span> 
          <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
            MR: ${data.user?.displayName}
          </span>
          </p>
        `;
        setTimeout(() => {
          this._router.navigate(['/Home'])
        }, 1500);
      })
      .catch((err) => {
        if (err) {
          this.errorMessage = `<p class="m-0 d-flex flex-column">
            <span class="text-main font-Bold-s20"> Oops ! </span> 
            <span class="text-white font-SemiBold-s20 d-flex align-items-center gap-2"> 
            Look like Email Or Password Incorrect
            </span>
            </p>`;
        }
      });
    /*     pipe(
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
          setTimeout(() => {
            this._router.navigate(['/Home'])
          }, 1500);
        }
      });
      */
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
      this.buttonStatus = true;
    }, 2000);
  }
}
