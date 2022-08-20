import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comment/comments.service';
import { Icomment } from '../../models/iComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: Icomment[] = [];
  constructor(private service: CommentsService) {}

  ngOnInit(): void {
    this.service.getComments().subscribe((data) => {
      this.comments = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...Object(e.payload.doc.data()),
        } as Icomment;
      });
    });
  }
  update(comment: Icomment) {
    this.service.updateComment(comment);
  }

  delete(id: string) {
    if (confirm('confirm delete !')) {
      this.service.deleteComment(id);
    }
  }
}
