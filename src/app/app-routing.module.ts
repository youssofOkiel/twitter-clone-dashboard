import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:"main" , component:MainComponent},
  {path:"" , component:MainComponent},
  {path:"users" , component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

