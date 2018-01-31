import { TourneyPosition } from '@app/core';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '@app/core';
import { MatchService } from '@app/core';
import { SeasonService } from '@app/core';
import { User } from '@app/core';
import { Match } from '@app/core';
import { PlayerPosition } from '@app/core/classes/player-position';

@Component({
  selector: 'app-new-season-inputs',
  templateUrl: './new-season-inputs.component.html',
  styleUrls: ['./new-season-inputs.component.scss']
})
export class NewSeasonInputsComponent implements OnInit {

  @Output() playerChanged = new EventEmitter<User[]>();
  @Output() tourneyTime = new EventEmitter<TourneyPosition>();

  users: User[] = [];
  options: FormGroup;
  userNumbers: number[] = [4, 5, 6];
  numbers: number[];
  numberOfUsers: number;
  playerPositions: PlayerPosition;
  matchesPlayed: number;
  players: string[];
  playingUsers: User[];
  initialMatchupsSet: boolean;
  allMatchesPlayed: boolean;
  blueTeamScore: number;
  orangeTeamScore: number;
  gameFinished: boolean;

  constructor(
    private userService: UserService,
    private matchService: MatchService,
    private seasonService: SeasonService,
    private fb: FormBuilder,
  ) {
    this.options = fb.group({
      hideRequired: true,
      floatLevel: 'auto'
    });
  }

  ngOnInit() {
    this.getPossibleUsers();
  }
  setInitialMatchup() {
    this.playerPositions = this.seasonService.setInitialLocations(this.playingUsers);
    this.matchesPlayed = 1;
    this.initialMatchupsSet = true;
    this.initializeScores();
    this.playerChanged.emit(this.playingUsers);
  }
  setNextMatchup() {
    this.initializeScores();
    this.playerPositions = this.seasonService.setNextMatchup(this.playingUsers, this.matchesPlayed);
    this.matchesPlayed++;
    this.gameFinished = false;
    if (this.matchesPlayed === this.numberOfUsers + 1) {
      this.allMatchesPlayed = true;
      this.tourneyTime.emit(this.seasonService.setTournamentMatchups(this.playingUsers));
    }
  }
  addMatch() {
    this.playerPositions = this.seasonService.addMatch(this.blueTeamScore, this.orangeTeamScore, this.playerPositions);
    this.playingUsers = this.seasonService.setPlayerRankings(this.playerPositions);
    this.playerChanged.emit(this.playingUsers);
    this.gameFinished = true;
  }
  setUserAmount(userNumber: number): void {
    this.numberOfUsers = userNumber;
    this.numbers = Array(this.numberOfUsers).fill(0).map( (x, i) => i);
    this.playingUsers = Array(this.numberOfUsers);
  }
  getPossibleUsers(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
  setUser(player: User, location: number): void {
    this.playingUsers[location] = player;
  }
  allPlayersSet(): boolean {
    let haveAllPlayers = false;
    if (this.playingUsers) {
      haveAllPlayers = this.checkForAllPlayers(this.playingUsers, this.numberOfUsers);
    }
    return haveAllPlayers;
  }
  isGameFinished(): boolean {
    let isGameFinished = false;
    if (this.blueTeamScore >= 6 || this.orangeTeamScore >= 6) { isGameFinished = true; }
    return isGameFinished;
  }
  private checkForAllPlayers(playingUsers: User[], numberOfUsers: number): boolean {
    let totalPlayers = 0;
    playingUsers.forEach((player: User) => {
      totalPlayers++;
    });
    if (totalPlayers === numberOfUsers) {
      return true;
    } else {
      return false;
    }
  }
  private initializeScores() {
    this.blueTeamScore = 0;
    this.orangeTeamScore = 0;
  }


}
