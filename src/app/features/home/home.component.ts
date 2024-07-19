import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { loadProductAction } from 'src/app/store/Actions/product.action';
import { productsSelector } from 'src/app/store/Reducers/product.reducer';
import { StoreInterface } from 'src/app/store/store';
import { ProductsEffect } from '../../store/effects/product.effects';
import { Product } from '../../store/Reducers/product.reducer';
import { ProductsService } from 'src/app/core/service/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  errorMessage!:string 
  dataOfCard:Product[] = []
  constructor(private _store: Store<StoreInterface> , private spinner: NgxSpinnerService , private error:ProductsEffect , private pro:ProductsService) {}
  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts() {
    this._store.dispatch(new loadProductAction());
    this._store.select(productsSelector).subscribe((res:any) => {
      console.log(res);
      if(this.error.errorMessage){
        this.errorMessage = this.error.errorMessage
      }else {
        this.dataOfCard  = res
      }
    })
  }
  addProudact(event:number){
    console.log(event);
    
  }
}
