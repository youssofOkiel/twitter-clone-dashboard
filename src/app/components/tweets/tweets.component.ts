import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetsService } from 'src/app/services/tweet/tweets.service';
import { Itweet } from './../../models/itweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
})
export class TweetsComponent implements OnInit {
  tweets: Itweet[];

  constructor(private service: TweetsService, private router: Router) {}

  ngOnInit(): void {
    this.service.getTweets().subscribe((data) => {
      this.tweets = data.map((e) => {
        console.log('e', e.payload.doc.data());

        return {
          id: e.payload.doc.id,
          ...Object(e.payload.doc.data()),
        } as Itweet;
      });
    });
  }

  update(tweet: Itweet) {
    this.service.updateTweet(tweet);
  }

  delete(id: string) {
    if (confirm('confirm delete !')) {
      this.service.deleteTweet(id);
    }
  }
}
