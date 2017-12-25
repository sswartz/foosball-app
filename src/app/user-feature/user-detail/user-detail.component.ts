import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '@app/core';
import { UserService } from '@app/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  users: User[];
  user: User;
  playerInfo;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getUsers();
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user;

        const matchesPlayed = user.wins + user.losses;
        const winPercentage = (user.wins + user.losses > 0) ? user.wins / (user.wins + user.losses) : 0;

        this.playerInfo = [
          {title: 'Matches Played', value: matchesPlayed },
          {title: 'Wins', value: user.wins},
          {title: 'Losses', value: user.losses},
          {title: 'Win Percentage', value: winPercentage },
          {title: 'Season Wins', value: user.seasonWins}
        ];
       }
      );
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users =>
        this.users = users
      );

  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }
}
