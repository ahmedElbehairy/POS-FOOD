import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { itemOfSideMenu } from 'src/app/core/model/sideMenu';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
itemOfSideMenu:itemOfSideMenu[] = [
  {disabled:false ,icon:'icon-home', name:'Home', routing:'/Home'},
  {disabled:true ,icon:'icon-dashboard', name:'Dashboard', routing:'/Dashboard'},
  {disabled:false ,icon:'icon-order', name:'Order', routing:'/Order'},
  {disabled:false ,icon:'icon-product', name:'Product', routing:'/Product'},
  {disabled:false ,icon:'icon-notification', name:'Notification', routing:'/Notification'},
  {disabled:false ,icon:'icon-customers', name:'Customers', routing:'/Customers'},
  {disabled:false ,icon:'icon-messages', name:'Messages', routing:'/Messages'},
  {disabled:false ,icon:'icon-setting', name:'Setting', routing:'/Setting'},
]

constructor(public _Router:Router ,private _AdmainGuard:AuthService){
  _AdmainGuard.User.subscribe((user:any) => {
    this.itemOfSideMenu[1].disabled = user.multiFactor.user.email !== 'admain@gmail.com'
  })
}
}
