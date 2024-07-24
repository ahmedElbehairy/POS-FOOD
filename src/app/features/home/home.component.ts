import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProductAction } from 'src/app/store/Actions/product.action';
import { productsSelector } from 'src/app/store/Reducers/product.reducer';
import { StoreInterface } from 'src/app/store/store';
import { Product } from '../../store/Reducers/product.reducer';
import { Order, SendPro } from 'src/app/core/model/product';
import { ProductsService } from 'src/app/core/service/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  errorMessage!:string 
  dataOfCard:Product[] = []
  order:Order = {id:'' , orders:[] ,TotalPriceOfOrder:0};
  id:string = '0'
  constructor(private _store: Store<StoreInterface> ,private _orders:ProductsService) {}
  ngOnInit() {
    this.getAllProducts();
    this.getAllOrders();
  }
  getAllOrders(){
    this._orders.getAllOrders().subscribe(res => {
      this.order.id = res.length.toString()
      console.log(res);
    })
  }
  getAllProducts() {
    this._store.dispatch(new loadProductAction());
    this._store.select(productsSelector).subscribe((res:any) => {
      this.dataOfCard  = res
    },(erro:any) => {
      this.errorMessage = erro.message
    })
  }
  addProudact(event:string){
    this.id = event
  }
  newOrder(item:SendPro){
    this.order.orders.push(item)
    this.order.TotalPriceOfOrder = 0
    this.order.orders.map(el => {
      this.order.TotalPriceOfOrder += el.totalPrice
    })
  }
}
