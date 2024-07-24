import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/store/Reducers/product.reducer';
import { NewOrder } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient, private FS: AngularFirestore) {}

  getProducts() {
    return this.FS.collection('products').valueChanges();
  }
  getOneProducts(id: string) {
    return this.FS.collection('products').doc(id).valueChanges();
  }
  makeOrder(id: string, orderData: NewOrder) {
    return this.FS.collection('orders').doc(id).set(orderData);
  }
  getAllOrders() {
    return this.FS.collection('orders').valueChanges();
  }
}
