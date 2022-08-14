import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';
import { UsersService } from 'src/app/services/user/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Iuser[];

  constructor(private service: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((data) => {
      this.users = data.map((e) => {
        console.log('e', e.payload.doc.data());

        return {
          id: e.payload.doc.id,
          ...Object(e.payload.doc.data()),
        } as Iuser;
      });
    });
  }

  update(user: Iuser) {
    if (user.is_active) {
      user.is_active = false;
    } else {
      user.is_active = true;
    }

    this.service.updateUser(user);
  }

  delete(id: string) {
    if (confirm('confirm delete !')) {
      this.service.deleteUser(id);
    }
  }
}
