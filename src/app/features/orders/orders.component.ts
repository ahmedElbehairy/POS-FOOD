import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/core/service/products.service';
import { loadorderstAction } from 'src/app/store/Actions/orders.action';
import { Orders, ordersSelector } from 'src/app/store/Reducers/orders.reducer';
import { StoreInterface } from 'src/app/store/store';
declare var $: any;

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  errorMessage!: string;
  Orders!:Orders []
  orderOpen!:any

  constructor(
    private _orders: ProductsService,
    private _store: Store<StoreInterface>
  ) {}
  ngOnInit() {
    this.getAllOrders();
  }
  getAllOrders() {
    this._store.dispatch(new loadorderstAction());
    this._store.select(ordersSelector).subscribe(
      (res:any) => {
        this.Orders = res
      },
      (erro) => {
        this.errorMessage = erro.message;
      }
    );
  }
  open(idOfOrder:string){
    this.Orders.map(el => {
      if(el.idOfOrder == idOfOrder ){
        this.orderOpen =  el 
      }
    })   
  }
  openReset() {
    if (!document.getElementById('update')?.click) {
      $('#make_order').modal('show');
    }
  }
}
