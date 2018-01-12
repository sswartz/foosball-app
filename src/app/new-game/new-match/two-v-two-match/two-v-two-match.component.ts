import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '@app/core';
import { MatchService } from '@app/core';
import { User } from '@app/core';
import { Match } from '@app/core';

@Component({
  selector: 'app-two-v-two-match',
  templateUrl: './two-v-two-match.component.html',
  styleUrls: ['./two-v-two-match.component.scss']
})
export class TwoVTwoMatchComponent implements OnInit {
  users: User[];
  options: FormGroup;
  blueUsers: User[];
  orangeUsers: User[];
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
    this.blueUsers = [];
    this.orangeUsers = [];
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
  getErrorMessage(): string {
    return 'Users must be different';
  }
  setBlueUser1(thisBlueUser: User): void {
    this.blueUsers[0] = thisBlueUser;
  }
  setBlueUser2(thisBlueUser: User): void {
    this.blueUsers[1] = thisBlueUser;
  }
  setOrangeUser1(thisOrangeUser: User): void {
    this.orangeUsers[0] = thisOrangeUser;
  }
  setOrangeUser2(thisOrangeUser: User): void {
    this.orangeUsers[1] = thisOrangeUser;
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
     this.match.blueUserId1 = this.blueUsers[0].id;
     this.match.blueUserId2 = this.blueUsers[1].id;
     this.match.orangeUserId1 = this.orangeUsers[0].id;
     this.match.orangeUserId2 = this.orangeUsers[1].id;

     this.add(this.match);
     this.updateUsers(this.match);
  }
  add(match: Match): void {
    this.matchService.addMatch(match)
      .subscribe(dbMatch => this.match = dbMatch);
  }
  updateUsers(match: Match): void {
    let winningUsers: User[], losingUsers: User[];
    if (this.blueTeamScore > this.orangeTeamScore) {
      winningUsers = this.blueUsers;
      losingUsers = this.orangeUsers;
    } else {
      winningUsers = this.orangeUsers;
      losingUsers = this.blueUsers;
    }
    winningUsers[0].wins += 1;
    winningUsers[1].wins += 1;
    losingUsers[0].losses += 1;
    losingUsers[1].losses += 1;
    this.userService.updateUser(winningUsers[0]).subscribe();
    this.userService.updateUser(winningUsers[1]).subscribe();
    this.userService.updateUser(losingUsers[0]).subscribe();
    this.userService.updateUser(losingUsers[1]).subscribe();
  }

}
