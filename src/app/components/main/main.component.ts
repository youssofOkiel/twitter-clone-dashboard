import { Component, OnInit } from '@angular/core';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { UsersService } from './../../services/users.service';
import { Iuser } from './../../models/iuser';
import { Itweet } from './../../models/itweet';
import { Ihash } from './../../models/ihash';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdCU5HvX0gRdf2N_O8Q-pIEK54lUffMII",
  authDomain: "test-8fcef.firebaseapp.com",
  projectId: "test-8fcef",
  storageBucket: "test-8fcef.appspot.com",
  messagingSenderId: "186582312887",
  appId: "1:186582312887:web:b7747ef473e72e44f7ea32",
  measurementId: "G-PN0375W5G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users:Iuser[]
  tweets:Itweet[]
  hashs:Ihash[]
  constructor(private service:UsersService) {

    this.users = this.service.twitterUsers;
    this.tweets = this.service.tweets;
    this.hashs = this.service.hashtags;
   
   }

  ngOnInit(): void {
  }
}
