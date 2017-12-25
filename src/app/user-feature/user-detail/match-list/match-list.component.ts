import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
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
  displayedColumns = [ 'winningUserName', 'losingUserName', 'winningScore', 'losingScore', 'date' ];
  dataSource;



  constructor() { }

  ngOnInit() {
    this.matches = MATCHES;
    this.userMatches = this.filterForMatchesWithId(this.user.id);
    this.userMatches = this.addUserNames(this.userMatches, this.allUsers);
    console.log(this.userMatches);
    this.dataSource = new MatTableDataSource(this.userMatches);
  }

  filterForMatchesWithId(id: number): Match[] {
    return this.matches.filter((match: Match) =>
      match.winningUserId === id  || match.losingUserId === id
    );
  }
  addUserNames(userMatches: Match[], users: User[]) {
    for ( let i = 0; i < userMatches.length; i++ ) {
      userMatches[i].winningUserName = users.find(user => user.id === userMatches[i].winningUserId).name;
      userMatches[i].losingUserName = users.find(user => user.id === userMatches[i].losingUserId).name;
    }
    return userMatches;


  }
  filterForWins(id: number): number {
    return this.matches.filter((match: Match) =>
      match.winningUserId === id
    ).length;
  }
  filterForLosses(id: number): number {
    return this.matches.filter((match: Match) =>
      match.losingUserId === id
    ).length;
  }


}
export const MATCHES: Match[] = [
  {matchId: 1, winningUserId: 1, losingUserId: 2, winningScore: 6,
   losingScore: 2, date: new Date(), winningColorId: 1, losingColorId: 2, winningUserName: 'Stuart Swartz', losingUserName: ''},
  {matchId: 2, winningUserId: 3, losingUserId: 2, winningScore: 6,
   losingScore: 4, date: new Date(), winningColorId: 3, losingColorId: 2, winningUserName: '', losingUserName: ''},
  {matchId: 3, winningUserId: 3, losingUserId: 1, winningScore: 6,
   losingScore: 4, date: new Date(), winningColorId: 3, losingColorId: 2, winningUserName: '', losingUserName: ''},
];
