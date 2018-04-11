import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatchService } from '@app/core';
import { User } from '@app/core';
import { Match } from '@app/core';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent implements OnInit {
  @Input() user: User;
  @Input() allUsers: User[];
  matches: Match[];
  userMatches: Match[];
  userWins: number;
  userLosses: number;
  displayedColumns = [ 'blueUserNames', 'orangeUserNames', 'blueScore', 'orangeScore', 'date' ];
  dataSource;



  constructor(
    private matchService: MatchService
  ) { }

  ngOnInit() {
    this.getMatches();
  }
  init() {
    this.userMatches = this.filterForMatchesWithId(this.user.id);
    this.userMatches = this.addUserNames(this.userMatches, this.allUsers);
    console.log(this.userMatches);
    this.dataSource = new MatTableDataSource(this.userMatches);
  }

  getMatches(): void {
    this.matchService.getMatches()
      .subscribe(matches => {
        this.matches = matches;
        this.init();
      });
  }

  filterForMatchesWithId(id: string): Match[] {
    return this.matches.filter((match: Match) =>
      match.blueUserId1 === id  || match.orangeUserId1 === id || match.blueUserId2 === id || match.orangeUserId2 === id
    );
  }
  addUserNames(userMatches: Match[], users: User[]) {
    for ( let i = 0; i < userMatches.length; i++ ) {
      userMatches[i].blueUserNames = users.find(user => user.id === userMatches[i].blueUserId1).name;
      if (userMatches[i].blueUserId2.length > 3) {
        userMatches[i].blueUserNames += ', ' + users.find(user => user.id === userMatches[i].blueUserId2).name;

      }
      userMatches[i].orangeUserNames = users.find(user => user.id === userMatches[i].orangeUserId1).name;
      if (userMatches[i].orangeUserId2.length > 3) {
        userMatches[i].orangeUserNames += ', ' + users.find(user => user.id === userMatches[i].orangeUserId2).name;
      }
    }
    return userMatches;


  }
  filterForWins(id: string): number {
    return this.matches.filter((match: Match) =>
      match.blueUserId1 === id
    ).length;
  }
  filterForLosses(id: string): number {
    return this.matches.filter((match: Match) =>
      match.orangeUserId1 === id
    ).length;
  }
}
