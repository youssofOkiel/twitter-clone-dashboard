import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:"" , component:MainComponent,children:[
    {path:"main" , component:MainComponent},
    
  ]},
  
  {path:"**" , component:NotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

