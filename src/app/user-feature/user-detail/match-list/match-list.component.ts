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
  displayedColumns = [ 'blueUserName1', 'orangeUserName1', 'blueScore', 'orangeScore', 'date' ];
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

  filterForMatchesWithId(id: number): Match[] {
    return this.matches.filter((match: Match) =>
      match.blueUserId1 === id  || match.orangeUserId1 === id
    );
  }
  addUserNames(userMatches: Match[], users: User[]) {
    for ( let i = 0; i < userMatches.length; i++ ) {
      userMatches[i].blueUserName1 = users.find(user => user.id === userMatches[i].blueUserId1).name;
      userMatches[i].orangeUserName1 = users.find(user => user.id === userMatches[i].orangeUserId1).name;
    }
    return userMatches;


  }
  filterForWins(id: number): number {
    return this.matches.filter((match: Match) =>
      match.blueUserId1 === id
    ).length;
  }
  filterForLosses(id: number): number {
    return this.matches.filter((match: Match) =>
      match.orangeUserId1 === id
    ).length;
  }
}
