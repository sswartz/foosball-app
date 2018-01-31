import { SeasonTournamentComponent } from './season-tournament/season-tournament.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewSeasonInputsComponent } from './new-season-inputs/new-season-inputs.component';
import { SeasonTableComponent } from '../season-table/season-table.component';
import { User, TourneyPosition } from '@app/core';

@Component({
  selector: 'app-new-season',
  templateUrl: './new-season.component.html',
  styleUrls: ['./new-season.component.scss']
})
export class NewSeasonComponent {

  players: User[]; // = [];
  tourneyPlayers: TourneyPosition; // = [];

  constructor() { }

  playerChanged(players: User[]) {
    this.players = players;
  }
  tourneyTime(tourneyPlayers: TourneyPosition) {
    this.tourneyPlayers = tourneyPlayers;
  }


}
