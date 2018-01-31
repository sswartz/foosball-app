import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { User, TourneyPosition, TourneyPlayer } from '@app/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-season-tournament',
  templateUrl: './season-tournament.component.html',
  styleUrls: ['./season-tournament.component.scss']
})
export class SeasonTournamentComponent implements OnChanges {
  @Input() tourneyData: TourneyPosition;
  tourneyUsers: TourneyPosition;
  tourneyPlayers: TourneyPlayer[];
  tourneyPlayers2: TourneyPlayer[];
  playingUserTop: TourneyPlayer;
  playingUserBottom: TourneyPlayer;
  roundIndex: number;


  options: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) {
    this.options = fb.group({
      hideRequired: true,
      floatLevel: 'auto'
    });
  }
  initializeTourneyPlayers() {
    this.tourneyPlayers = [];
    this.roundIndex = 0;
    this.tourneyUsers.firstRound.map((player, index, array) => {
      this.tourneyPlayers.push(new TourneyPlayer(player, 3)); // 3 rounds initially, refactor for more
    });
  }
  setTourneyRounds(tourneyPlayers: TourneyPlayer[], index1: number, index2, round: number) {
    if (tourneyPlayers.length > 1) {
      this.playingUserTop = tourneyPlayers[index1];
      this.playingUserBottom = tourneyPlayers[index2];
      this.playingUserTop.tourneyPlaying[round] = true;
      this.playingUserBottom.tourneyPlaying[round] = true;
    } else {
      // declare champion
    }
  }
  findNextRoundPlayers(nextRound: number): TourneyPlayer[] {
    return this.tourneyPlayers.filter( (tPlayer, index, array) => {
      return (tPlayer.inRound[nextRound]);
    });
  }
  addMatch(round: number) {
    // check who won and set appropriate metadata
    // WINNER: tourney win this round
    // WINNER: in next round
    // BOTH: no longer playing this round
    // LOSER: tourney loss this round
    if (this.playingUserTop.tourneyScore[round] > this.playingUserBottom.tourneyScore[round]) {
      this.playingUserTop.tourneyWin[round] = true;
      this.playingUserTop.inRound[round + 1] = true;
      this.playingUserTop.inRound[round] = false;
      this.playingUserBottom.tourneyLoss[round] = true;
      this.playingUserBottom.inRound[round] = false;
    } else {
      this.playingUserBottom.tourneyWin[round] = true;
      this.playingUserBottom.inRound[round + 1] = true;
      this.playingUserBottom.inRound[round] = false;
      this.playingUserTop.inRound[round] = false;
      this.playingUserTop.tourneyLoss[round] = true;
    }
    // both users no longer currently playing
    this.playingUserTop.tourneyPlaying[round] = false;
    this.playingUserBottom.tourneyPlaying[round] = false;
    // find next top and bottom indecies and remove that data from round
    const userTopIndex = this.tourneyPlayers.findIndex( (tPlayer, index, obj) => {
      return tPlayer.inRound[round];
    });
    if ( userTopIndex === -1 ) {
    // check if no more available
      this.roundIndex++;
      this.setTourneyRounds(this.findNextRoundPlayers(round + 1), 0, 1, round + 1);
    } else {
      this.tourneyPlayers[userTopIndex].inRound[round] = false;
      const userBottomIndex = this.tourneyPlayers.findIndex( (tPlayer, index, obj) => {
        return tPlayer.inRound[round];
      });
      this.tourneyPlayers[userBottomIndex].inRound[round] = false;
      this.setTourneyRounds(this.tourneyPlayers, userTopIndex, userBottomIndex, round);
    }
  }

  isGameFinished(round: number): boolean {
    let isGameFinished = false;
    if (this.playingUserTop.tourneyScore[0] >= 6 || this.playingUserBottom.tourneyScore[0] >= 6) { isGameFinished = true; }
    return isGameFinished;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tourneyData']) {
      this.tourneyUsers = this.tourneyData;
      this.initializeTourneyPlayers();
      this.setTourneyRounds(this.tourneyPlayers, 0, 1, 0);
    }
  }

}
