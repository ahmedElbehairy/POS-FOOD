import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProductAction } from 'src/app/store/Actions/product.action';
import { productsSelector } from 'src/app/store/Reducers/product.reducer';
import { StoreInterface } from 'src/app/store/store';
import { Product } from '../../store/Reducers/product.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  errorMessage!:string 
  dataOfCard:Product[] = []
  id:string = '0'
  constructor(private _store: Store<StoreInterface> ) {}
  ngOnInit() {
    this.getAllProducts();
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
}
