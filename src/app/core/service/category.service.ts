import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { newCategory } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
constructor(private FS: AngularFirestore) {}

  addCategory(id:string , newCategory:newCategory){
    return this.FS.collection('category').doc(id).set(newCategory);
  }
  getAllCategory(){
    return this.FS.collection('category').valueChanges();
  }
}
