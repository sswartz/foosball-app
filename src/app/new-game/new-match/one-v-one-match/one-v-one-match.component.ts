import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '@app/core';
import { MatchService } from '@app/core';
import { User } from '@app/core';
import { Match } from '@app/core';

@Component({
  selector: 'app-one-v-one-match',
  templateUrl: './one-v-one-match.component.html',
  styleUrls: ['./one-v-one-match.component.scss']
})
export class OneVOneMatchComponent implements OnInit {
  users: User[];
  options: FormGroup;
  blueUser: User;
  orangeUser: User;
  blueTeamScore: number;
  orangeTeamScore: number;
  match: Match;

  constructor(
    private userService: UserService,
    private matchService: MatchService,
    private fb: FormBuilder
  ) {
    this.options = fb.group({
      hideRequired: true,
      floatLevel: 'auto'
    });
   }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  getErrorMessage(): string {
    return 'Users must be different';
  }
  setBlueUser(thisUser: User): void {
    this.blueUser = thisUser;
  }
  setOrangeUser(thisUser: User): void {
    this.orangeUser = thisUser;
  }
  submitMatchData() {
    this.match = new Match(
      this.blueTeamScore,
      this.orangeTeamScore,
      1, // blueColorId
      2, // orangeColorId
      new Date(),
      1 // matchTypeId
     );
     this.match.blueUserId1 = this.blueUser.id;
     this.match.orangeUserId1 = this.orangeUser.id;
     this.match.blueUserName1 = this.blueUser.name;
     this.match.orangeUserName1 = this.orangeUser.name;

     this.add(this.match);
     this.updateUsers(this.match);
  }
  add(match: Match): void {
    this.matchService.addMatch(match)
      .subscribe(dbMatch => this.match = dbMatch);
  }
  updateUsers(match: Match): void {
    let winningUser: User, losingUser: User;
    if (this.blueTeamScore > this.orangeTeamScore) {
      winningUser = this.blueUser;
      losingUser = this.orangeUser;
    } else {
      winningUser = this.orangeUser;
      losingUser = this.blueUser;
    }
    winningUser.wins += 1;
    losingUser.losses += 1;
    this.userService.updateUser(winningUser).subscribe();
    this.userService.updateUser(losingUser).subscribe();


  }
}
