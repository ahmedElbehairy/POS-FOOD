import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { itemOfSideMenu } from 'src/app/core/model/sideMenu';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
itemOfSideMenu:itemOfSideMenu[] = [
  {icon:'icon-home', name:'Home', routing:'/Home'},
  {icon:'icon-dashboard', name:'Dashboard', routing:'/Dashboard'},
  {icon:'icon-order', name:'Order', routing:'/Order'},
  {icon:'icon-product', name:'Product', routing:'/Product'},
  {icon:'icon-notification', name:'Notification', routing:'/Notification'},
  {icon:'icon-customers', name:'Customers', routing:'/Customers'},
  {icon:'icon-messages', name:'Messages', routing:'/Messages'},
  {icon:'icon-setting', name:'Setting', routing:'/Setting'},
]

constructor(public _Router:Router){}
}
