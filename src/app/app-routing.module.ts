import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TweetsComponent } from './components/tweets/tweets.component';

const routes: Routes = [
  {path:"main" , component:MainComponent},
  {path:"tweets" , component:TweetsComponent},
  {path:"" , component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

