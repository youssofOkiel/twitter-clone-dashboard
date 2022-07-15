import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UsersService } from 'src/app/services/users.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users:Iuser[] = []
  constructor(private service:UsersService ,  private router:Router) { 
   
  }

  ngOnInit(): void {
  this.users = this.service.twitterUsers   
  }

  delete(id:number){

    if(confirm("are you sure to delete this user !"))
    {
      this.service.deleteUser(id).subscribe(u => this.router.navigate(['/main']))
    }

  }

}
