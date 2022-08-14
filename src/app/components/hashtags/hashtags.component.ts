import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user/users.service';
import { Ihash } from './../../models/ihash';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.scss']
})
export class HashtagsComponent implements OnInit {

  hashtags:Ihash[] = []
  constructor(private service:UsersService) {

   }

  ngOnInit(): void {
    this.hashtags = this.service.hashtags
  }

}
