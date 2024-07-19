import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forms } from '../model/Auth';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  login(loginValue: Forms) {
    return this._http.post(`https://fakestoreapi.com/auth/login`, loginValue);
  }
  Registration(RegistrationValue: Forms) {
    return this._http.post(`https://fakestoreapi.com/auth/Registration`, RegistrationValue);
  }
  ForgetPassword(ForgetPasswordValue: Forms) {
    return this._http.post(`https://fakestoreapi.com/auth/ForgetPassword`, ForgetPasswordValue);
  }
  ResetPassword(ResetPasswordValue: Forms) {
    return this._http.post(`https://fakestoreapi.com/auth/ResetPassword`, ResetPasswordValue);
  }
}
