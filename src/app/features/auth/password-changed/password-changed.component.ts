import { Component } from '@angular/core';
import { layOutOfPage } from 'src/app/core/model/Auth';

@Component({
  selector: 'app-password-changed',
  templateUrl: './password-changed.component.html',
  styleUrls: ['./password-changed.component.scss']
})
export class PasswordChangedComponent {
  buttonStatus:boolean = true
  objectOfPage: layOutOfPage = {
    nameOfPage: 'Password changed successfully',
    titleOfPage: 'Password Changed!',
    text3: 'We have sent a verification link to your email address admin22@gmail.com',
    buttonOfPage:'Back To Login',
    buttonOfPage1:'Resend Link',
    routing: '/login',
    routing2: '/login',
  };
}
