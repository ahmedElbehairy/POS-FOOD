import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/core/service/products.service';
import { loadProductAction } from 'src/app/store/Actions/product.action';
import { Product, productsSelector } from 'src/app/store/Reducers/product.reducer';
import { StoreInterface } from 'src/app/store/store';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrl: './product-home.component.scss'
})
export class ProductHomeComponent {
  errorMessage!: string;
  successMessage!: string;
  Product: Product[] = [];
  constructor(private _product:ProductsService, private _store: Store<StoreInterface>){}
  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this._store.dispatch(new loadProductAction());
    this._store.select(productsSelector).subscribe(
      (res:any) => {
        console.log(res); 
        this.Product = res
      },
      (erro) => {
        this.errorMessage = erro.message;
      }
    );
  }
  editProduct(id:string){
    
  }
  deleteProduct(id:string){
    this._product.deleteProducts(id).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
      
    })
  }
}
