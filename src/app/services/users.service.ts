import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../models/iuser';
import { Itweet } from '../models/itweet';
import { Ihash } from '../models/ihash';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  twitterUsers: Iuser[] = [];
  tweets: Itweet[] = [];
  hashtags: Ihash[] = [];
  users: Observable<any[]>;

  constructor(private http: HttpClient, firestore: AngularFirestore) {
    this.users = firestore.collection('users').valueChanges();

    this.http.get<Iuser[]>(`http://localhost:3000/users`).subscribe((u) => {
      this.twitterUsers = u;
    });
    this.http.get<Itweet[]>(`http://localhost:3000/tweets`).subscribe((t) => {
      this.tweets = t;
    });
    this.http.get<Ihash[]>(`http://localhost:3000/hashtags`).subscribe((h) => {
      this.hashtags = h;
    });
  }

  deleteUser(id: number) {
    return this.http.delete<Iuser>(`http://localhost:3000/users/${id}`);
  }
  deleteTweet(id: number) {
    return this.http.delete<Itweet>(`http://localhost:3000/tweets/${id}`);
  }
  deleteHashtags(id: number) {
    return this.http.delete<Ihash>(`http://localhost:3000/hashtags/${id}`);
  }
}
