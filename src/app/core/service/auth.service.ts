import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forms } from '../model/Auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  User: Observable<firebase.User | null>;
  code!: any;
  constructor(private _http: HttpClient, private FS: AngularFireAuth) {
    this.User = of(null);
    this.User = FS.user; 
  }

  login(loginValue: Forms) {
    return this.FS.signInWithEmailAndPassword(
      loginValue.email,
      loginValue.password
    );
  }
  Registration(RegistrationValue: Forms) {
    return this.FS.createUserWithEmailAndPassword(
      RegistrationValue.email,
      RegistrationValue.password
    );
  }
  ForgetPassword(ForgetPasswordValue: Forms): Promise<void> {
    return this.FS.sendPasswordResetEmail(ForgetPasswordValue.email);
  }
  GetCode(code: any) {
    this.FS.checkActionCode(code)
      .then((res) => {
        this.code = res;
      })
      .catch((err) => console.log(err));
  }
  ResetPassword(ResetPasswordValue: Forms): Promise<void> {
    return this.FS.confirmPasswordReset(this.code, ResetPasswordValue.password);
  }

  // deleteAcc(): Promise<void>  {
  //   return this.FS.currentUser
  // }

  loginWithGoogle() {
    // this.FS.signInWithPopup(new )
  }
  loginWithFacebook() {
    // this.FS.signInWithPopup(new )
  }

  logOut() {
    return this.FS.signOut();
  }
}
