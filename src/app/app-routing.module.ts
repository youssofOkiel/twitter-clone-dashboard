import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path:"" , component:MainComponent,children:[
    {path:"main" , component:MainComponent},
    {path:"hashtags" , component:HashtagsComponent},
    {path:"tweets" , component:TweetsComponent},
    {path:"users" , component:UsersComponent}
    
  ]},
  
  {path:"**" , component:NotfoundComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

