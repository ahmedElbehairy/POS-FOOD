import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NewUser } from '../model/Auth';
import { map } from 'rxjs';
import { newCustomer } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private FS:AngularFirestore) { }

  addNewUser(data:NewUser){
    return this.FS.doc(`users/${data.id}`).set({
      name:data.name , img:data.img , password:data.password , email:data.email
    })
  }
  deleteUser(id:string){
    return this.FS.collection('users').doc(id).delete()
  }
  getOneUser(id:string){
    return this.FS.collection('users').doc(id).valueChanges()
  }
  creatNewCoustomer(id:string , data:newCustomer){
    return this.FS.doc(`Coustomer/${id}`).set({
      data
    })
  }
  getCoustomers(){
    return this.FS.collection(`Coustomer`).valueChanges()
  }
  getOneCoustomers(id:string){
    return this.FS.collection(`Coustomer`).doc(id).valueChanges()
  }
}
