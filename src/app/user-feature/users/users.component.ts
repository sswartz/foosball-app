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
  dataSource; // = new MatTableDataSource([]);
  displayedColumns = ['name', 'wins', 'losses', 'seasonWins'];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(httpUsers => {
        this.users = httpUsers;
        this.dataSource = new MatTableDataSource(this.users);
       } );
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    const newUser = new User();
    newUser.name = name;
    newUser.wins = 0;
    newUser.losses = 0;
    newUser.seasonwins = 0;
    this.userService.addUser(newUser)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
  }

}
