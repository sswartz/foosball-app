import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

import { User } from '@app/core';
import { UserService } from '@app/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  dataSource;
  displayedColumns = ['name', 'wins', 'losses', 'seasonWins'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.dataSource = new MatTableDataSource(users);
       } );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addUser({ name } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
