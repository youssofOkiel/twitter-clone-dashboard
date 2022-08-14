import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Itweet } from 'src/app/models/itweet';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor(private firestore: AngularFirestore) {
  }

  getTweets() {
    return this.firestore.collection('posts').snapshotChanges();
  }

  updateTweet(tweet: Itweet) {
    this.firestore.doc('posts/' + tweet.id).update(tweet);
  }

  deleteTweet(tweetId: string) {
    this.firestore.doc('posts/' + tweetId).delete();
  }
}
