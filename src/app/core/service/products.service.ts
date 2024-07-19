import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/store/Reducers/product.reducer';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient , private FS:AngularFirestore) {}

   getProducts(){
     return this.FS.collection('products').valueChanges()
  }
}
