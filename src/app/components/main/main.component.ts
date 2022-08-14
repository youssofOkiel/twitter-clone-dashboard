import { Component, OnInit } from '@angular/core';

// Import the functions you need from the SDKs you need
import { UsersService } from '../../services/user/users.service';
import { Iuser } from './../../models/iuser';
import { Itweet } from './../../models/itweet';
import { Ihash } from './../../models/ihash';
import { Observable } from 'rxjs';
import { TweetsService } from 'src/app/services/tweet/tweets.service';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  users:Iuser[] ;
  tweets:Itweet[]

  constructor(private userService:UsersService, private tweetService: TweetsService) { }

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

  }
}
