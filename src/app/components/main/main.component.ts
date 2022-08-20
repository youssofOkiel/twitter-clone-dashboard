import { Component, OnInit } from '@angular/core';

// Import the functions you need from the SDKs you need
import { UsersService } from '../../services/user/users.service';
import { Iuser } from './../../models/iuser';
import { Itweet } from './../../models/itweet';
import { TweetsService } from 'src/app/services/tweet/tweets.service';
import { Icomment } from 'src/app/models/iComment';
import { CommentsService } from 'src/app/services/comment/comments.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  users:Iuser[] ;
  tweets:Itweet[];
  comments: Icomment[];

  constructor(private userService:UsersService, private tweetService: TweetsService, private commentService: CommentsService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.map((e) => {
        console.log('e', e.payload.doc.data());

        return {
          id: e.payload.doc.id,
          ...Object(e.payload.doc.data()),
        } as Iuser;
      });
    });

    this.tweetService.getTweets().subscribe((data) => {
      this.tweets = data.map((e) => {
        console.log('e', e.payload.doc.data());

        return {
          id: e.payload.doc.id,
          ...Object(e.payload.doc.data()),
        } as Itweet;
      });
    });


    this.commentService.getComments().subscribe((data) => {
      this.comments = data.map((e) => {
        return {
          id: e.payload.doc.id,
          ...Object(e.payload.doc.data()),
        } as Icomment;
      });
    });

  }
}
