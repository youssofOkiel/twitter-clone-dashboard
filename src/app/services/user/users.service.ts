import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../../models/iuser';
import { Itweet } from '../../models/itweet';
import { Ihash } from '../../models/ihash';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  tweets: Itweet[] = [];
  hashtags: Ihash[] = [];
  // users: Observable<any[]>;
  users: Iuser[];

  constructor(private http: HttpClient, private firestore: AngularFirestore) {
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  createUser(user: Iuser) {
    return this.firestore.collection('users').add(user);
  }

  updateUser(user: Iuser) {
    this.firestore.doc('users/' + user.id).update(user);
  }

  deleteUser(userId: string) {
    this.firestore.doc('users/' + userId).delete();
  }
}
