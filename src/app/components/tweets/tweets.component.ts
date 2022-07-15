import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Itweet } from './../../models/itweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss'],
})
export class TweetsComponent implements OnInit {
  tweets: Itweet[] = [];
  constructor(private service: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.tweets = this.service.tweets;
  }

  delete(id: number) {
    if (confirm('are you sure to delete this Tweet !')) {
      this.service.deleteTweet(id).subscribe((t) => this.router.navigate(['/main']));
    }
  }
}
