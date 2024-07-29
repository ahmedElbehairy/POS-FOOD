import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _AuthService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this._AuthService.User.subscribe((user:any) => {
        if (user) {
          // authorised so return true
          return true;
        } else {
          // not logged in so redirect to login page with the return url
          this.router.navigate(['login']);
          return false;
        }
      })
      return true
    }
    
  }

@Injectable({
  providedIn: 'root'
})
  
export class AdmainGuard implements CanActivate {
  constructor(private router: Router, private _AuthService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this._AuthService.User.subscribe((user:any) => {  
      if (user.multiFactor.user.email == 'admain@gmail.com') {
        // authorised so return true
        return true;
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['Home']);
        return false;
      }
    })
   return true
  }

}
