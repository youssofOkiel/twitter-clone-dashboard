import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import {NgCircleProgressModule} from 'ng-circle-progress'
import { HttpClientModule } from '@angular/common/http';

import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HashtagsComponent
    TweetsComponent
    UsersComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
