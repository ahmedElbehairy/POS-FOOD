import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ItemOrder, NewOrder, newProduct, UpCoustomerToOrder, UpProduct } from '../model/product';

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
  deleteProducts(id:string) {
    return this.FS.collection('products').doc(id).delete()
  }
  updateProducts(id:string , dataUp:UpProduct) {
    return this.FS.collection('products').doc(id).update(dataUp)
  }
  addProducts(id:string , ProductForm:newProduct) {
    return this.FS.collection('products').doc(id).set(ProductForm)
  }
  makeOrder(id: string, orderData: NewOrder) {
    return this.FS.collection('orders').doc(id).set(orderData);
  }
  updateOrder(id: string, itemOrder: ItemOrder[] ,totalPrice:number) {
    return this.FS.collection('orders')
      .doc(id)
      .update({ itemOrder: itemOrder  , totalPrice:totalPrice});
  }
  upCoustomerOfOrder(id: string, dataOfCoustomer: UpCoustomerToOrder) {
    return this.FS.collection('orders').doc(id).update(dataOfCoustomer);
  }
  getAllOrders() {
    return this.FS.collection('orders').valueChanges();
  }
  getOneOrders(id: string) {
    return this.FS.collection('orders').doc(id).valueChanges();
  }
}
