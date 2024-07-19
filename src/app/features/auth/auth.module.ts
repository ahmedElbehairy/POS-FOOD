import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordChangedComponent } from './password-changed/password-changed.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SplashComponent } from './splash/splash.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    PasswordChangedComponent,
    SplashComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    AuthRoutingModule,
    CommonModule
  ]
})
export class AuthModule { }
