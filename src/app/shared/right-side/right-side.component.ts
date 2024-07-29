import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/core/model/Auth';
import { NewOrder, Order, SendPro } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/service/products.service';
import { UsersService } from 'src/app/core/service/users.service';


@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent {
  @Input() order!:Order
  user!:NewUser
  MakeOrder!:NewOrder
  totalPrice:number = 0
  constructor(private _user:UsersService ,public _router:Router , private _order:ProductsService){}
  ngOnInit(){
    this.getUser()
  }
  getUser(){
    const id:any = localStorage.getItem('user')?.replace(/['"]+/g, '')
    this._user.getOneUser(id).subscribe((res:any) => {
      this.user = res 
    })
  }
  addPro(id:string , amount:number , i:number){
    if(id == 'add' && this.order.orders[i].amount >= 0 ){
      this.order.orders[i].amount = this.order.orders[i].amount + amount 
      this.order.orders[i].totalPrice =  this.order.orders[i].amount*this.order.orders[i].price
    }else if (id == 'minus' && this.order.orders[i].amount > 1 ){
      this.order.orders[i].amount = this.order.orders[i].amount - amount
      this.order.orders[i].totalPrice =  this.order.orders[i].amount*this.order.orders[i].price
    }else if (id == 'minus' && this.order.orders[i].amount == 1 ){
      this.order.orders.splice(i , 1)
      console.log(this.order.orders); 
    }
  }
  
  makeOrder(){
    let item:NewOrder = {idOfOrder:this.order.id , totalPrice:this.totalPrice , countOfitem:0 , itemOrder:[]}
    this.order.orders.map(el => {
      console.log(el);
      item.totalPrice += el.totalPrice
      item.countOfitem +=el.amount
      item.itemOrder.push({name:el.name , price:el.price , amount:el.amount , img:el.img})
    })
    this.MakeOrder = item
    this._order.makeOrder(item.idOfOrder , item).then(res => {
      this._router.navigate([`/creat_order/${item.idOfOrder}`])
    }).catch(err => {
      console.log(err);
    })
  }
}
