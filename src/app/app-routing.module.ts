import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashtagsComponent } from './components/hashtags/hashtags.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:"main" , component:MainComponent},
  {path:"hashtags" , component:HashtagsComponent},
  {path:"" , component:MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

