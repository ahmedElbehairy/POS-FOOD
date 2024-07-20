import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NewUser } from '../model/Auth';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private FS:AngularFirestore) { }

  addNewUser(data:NewUser){
    return this.FS.doc(`users/${data.id}`).set({
      name:data.name
    })
  }
}
