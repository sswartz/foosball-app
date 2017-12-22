import { Component, OnInit } from '@angular/core';
import { User } from '@app/core';
import { UserService } from '@app/core';
// import { UserSearch } from '@app/user-feature';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(1, 5));
  }
}
