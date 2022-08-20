import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Icomment } from 'src/app/models/iComment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private firestore: AngularFirestore) {
  }

  getComments() {
    return this.firestore.collection('comments').snapshotChanges();
  }

  updateComment(comment: Icomment) {
    this.firestore.doc('comments/' + comment.id).update(comment);
  }

  deleteComment(commentId: string) {
    this.firestore.doc('comments/' + commentId).delete();
  }
}
