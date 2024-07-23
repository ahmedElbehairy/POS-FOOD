import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { Forms, input, layOutOfPage, NewUser } from 'src/app/core/model/Auth';
import { AuthService } from 'src/app/core/service/auth.service';
import { UsersService } from 'src/app/core/service/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  errorMessage!: string;
  successMessage!: string;
  photo!: string;
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
      name: 'name',
      id: 'name_id',
      p_h: 'Name',
      ngModul: '',
      type: 'text',
      icon: 'icon-user',
      req:true,
      pattern:'',
      errorPattern:''
    },
    {
      name: 'email',
      id: 'email_id',
      p_h: 'Email Address',
      ngModul: '',
      type: 'email',
      icon: 'icon-email',
      req:true,
      pattern:'[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
      errorPattern:'Invalid email address'
    },
    {
      name: 'password',
      id: 'password_id',
      p_h: 'Password',
      ngModul: '',
      type: 'password',
      icon: 'icon-passwword',
      req:true,
      pattern:'^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$',
      errorPattern:'password must be 8 characters and 1 uppercase letter'
    },
    {
      name: 'Confirm_Password',
      id: 'Confirm _id',
      p_h: 'Confirm Password',
      ngModul: '',
      type: 'password',
      icon: 'icon-passwword',
      req:true,
      pattern:'',
      errorPattern:'Incorrect password'
    },
  ];
  constructor(private _Auth: AuthService , private User:UsersService ,private _Router:Router) {}
  getPhoto(event:string){
    this.photo = event
  }
  Registration(event:Forms) {
    if(event.password !== event.Confirm_Password){
      this.inputs[3].pattern = 'true'
    }else {
      this.inputs[3].pattern = ''
      this.buttonStatus = false;
      this._Auth.Registration(event).then(
        (data:any) => {
          let newUser:NewUser = {id:data.user?.uid , name:event.name , img:this.photo ,password:event.password ,email:event.email}
          this.User.addNewUser(newUser).then((res:any) => {
            this._Router.navigate(['/login'])
          });
          return data.user.updateProfile({
            displayName: event.name
          })
        }
      ).catch(err => this.errorMessage = err.message.split(':')[1].split('.')[0] )
    }
    setTimeout(() => {
      this.errorMessage = '';
      this.successMessage = '';
      this.buttonStatus = true;
      this.inputs[3].pattern = ''
    }, 3000);
  }
}
