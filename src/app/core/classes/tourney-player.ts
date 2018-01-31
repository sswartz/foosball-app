import { User } from './user';
export class TourneyPlayer {
  player: User;
  tourneyScore: number;
  tourneyWin: boolean;
  tourneyLoss: boolean;
  tourneyPlaying: boolean;
  inRound: boolean;

  constructor(player: User) {
    this.player = player;
    this.tourneyWin = false;
    this.tourneyLoss = false;
    this.tourneyPlaying = false;
    this.tourneyScore = 0;
    this.inRound = true;
  }
}
