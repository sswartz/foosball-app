import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Match } from '../classes/match';
import { TourneyPosition } from './../classes/tourney-position';
import { PlayerPosition } from '../classes/player-position';
import { MatchService } from './match.service';

const PLAYER_TOTAL = 4;
const OVERTIME = 5;
@Injectable()
export class SeasonService {

  constructor(private matchService: MatchService) {
    this.matchService = matchService;
   }

  /** PUBLIC METHODS */
  setInitialLocations(players: User[]): PlayerPosition {
    players = this.shuffle(players);
    players.forEach((value, index, array) => {
      value.benchTime = 0;
      value.seasonIndex = index;
      value.inSeasonPoints = 0;
      value.inSeasonWins = 0;
      value.inSeasonLosses = 0;
      value.inSeasonGoalDifferential = 0;
      value.inSeasonGoalsFor = 0;
      value.inSeasonGoalsAgainst = 0;
    });
    return this.usersToPositions(players);
  }

  setNextMatchup(players: User[], matchesPlayed: number): PlayerPosition {
    let positions = new PlayerPosition();
    const minBench = this.getMinBenchTime(players);

    const initialPositions = this.setInitialPlayerPosition(players, minBench);

    if (initialPositions.players.length >= PLAYER_TOTAL) {
      // need to cut some possible active players
      positions = this.cutPossibleActiveToActive(initialPositions);
    } else { // not enough possible active players
      positions = this.addBenchToActive(initialPositions);
    }
    this.addBenchTime(positions.bench);
    positions.players = this.shuffle(positions.players);
    return positions;
  }

  addMatch(blueScore: number, orangeScore: number , playerPositions: PlayerPosition): PlayerPosition {
    const match = this.matchService.createMatchObj(blueScore, orangeScore, playerPositions.players);
    this.matchService.addMatch(match).subscribe();
    this.addUserMatchPoints(playerPositions.players, blueScore, orangeScore);
    return playerPositions;
  }

  setPlayerRankings(playerPositions: PlayerPosition) {
    let players = playerPositions.players;
    players = players.concat(playerPositions.bench);
    return this.sort(players);
  }

  setTournamentMatchups(players: User[]): TourneyPosition {
    const tourneyPosition = new TourneyPosition();
    // if (players.length === 4) {
      const secondPlace = players[1];
      players[1] = players[3];
      players[3] = secondPlace;
      tourneyPosition.firstRound = players.slice(0, 4);
      tourneyPosition.bye = [];
    // } else if (players.length === 5) {
    //   tourneyPosition.bye = players.slice(0, 3);
    //   tourneyPosition.firstRound = players.slice(3);
    // } else if (players.length === 6) {
    //   tourneyPosition.bye = players.slice(0, 2);
    //   tourneyPosition.firstRound = players.slice(2);
    // }
    return tourneyPosition;
  }

  /** PRIVATE METHODS */
  private addUserMatchPoints(players: User[], blueScore: number, orangeScore: number) {
    if (blueScore > orangeScore) {
      this.addSeasonWin(this.getBluePlayers(players));
      this.addSeasonGoals(this.getBluePlayers(players), blueScore, orangeScore);
      if (orangeScore < OVERTIME) {
        this.addSeasonLoss(this.getOrangePlayers(players));
        this.addSeasonGoals(this.getOrangePlayers(players), orangeScore, blueScore);
      } else {
        this.addSeasonOTLoss(this.getOrangePlayers(players));
        this.addSeasonGoals(this.getOrangePlayers(players), orangeScore, blueScore);
      }
    } else {
      this.addSeasonWin(this.getOrangePlayers(players));
      this.addSeasonGoals(this.getOrangePlayers(players), orangeScore, blueScore);
      if (blueScore < OVERTIME) {
        this.addSeasonLoss(this.getBluePlayers(players));
      this.addSeasonGoals(this.getBluePlayers(players), blueScore, orangeScore);
      } else {
        this.addSeasonOTLoss(this.getBluePlayers(players));
        this.addSeasonGoals(this.getBluePlayers(players), blueScore, orangeScore);
      }
    }
  }
  private getBluePlayers(player: User[]): User[] {
    return player.slice(0, 2);
  }
  private getOrangePlayers(player: User[]): User[] {
    return player.slice(2);
  }
  private addSeasonGoals(players: User[], teamGoals: number, opponentGoals: number) {
    players.forEach((player: User) => {
      player.inSeasonGoalsFor += teamGoals;
      player.inSeasonGoalsAgainst += opponentGoals;
      player.inSeasonGoalDifferential += teamGoals - opponentGoals;
    });
  }
  private addSeasonWin(players: User[]): void {
    players.forEach((player: User) => {
      player.inSeasonWins++;
      player.inSeasonPoints = player.inSeasonPoints + 3;
    });
  }
  private addSeasonLoss(players: User[]) {
    players.forEach((player: User) => {
      player.inSeasonLosses++;
    });
  }
  private addSeasonOTLoss(players: User[]) {
    players.forEach((player: User) => {
      player.inSeasonLosses++;
      player.inSeasonPoints++;
    });
  }

  private getMinBenchTime(players: User[]): number {
    let minBench = 1000;
    players.forEach((player: User) => {
      minBench = (player.benchTime < minBench) ? player.benchTime  : minBench;
    });
    return minBench;
  }
  private addBenchTime(bench: User[]): User[] {
    bench.forEach((value: User) => {
      value.benchTime++;
    });
    return bench;
  }
  private setInitialPlayerPosition(players: User[], minBench: number): PlayerPosition {
    const positions = new PlayerPosition();
    players.forEach((player: User) => {
      if (player.benchTime === minBench) {
        positions.bench.push(player);
      } else {
        positions.players.push(player);
      }
    });
    return positions;
  }
  private usersToPositions(players: User[]): PlayerPosition {
    const positions = this.setPositions(players);
    this.addBenchTime(positions.bench);
    return positions;
  }
  private cutPossibleActiveToActive(possiblePositions: PlayerPosition): PlayerPosition {
    possiblePositions.players = this.shuffle(possiblePositions.players);
    const positions = this.setPositions(possiblePositions.players);
    possiblePositions.bench.forEach( (player: User) => {
      positions.bench.push(player);
    });
    return positions;
  }
  private setPositions(players: User[]): PlayerPosition {
    const positions = new PlayerPosition();
    positions.players  = players.slice(0, 4);
    positions.bench = players.slice(4); // set rest of possible actives to bench
    return positions;
  }
  private addBenchToActive(initialPositions: PlayerPosition): PlayerPosition {
    initialPositions.bench = this.shuffle(initialPositions.bench);
    while (initialPositions.players.length < 4) {
      // add bench players to active until there are 4 active
      initialPositions.players.push(initialPositions.bench.splice(0, 1)[0]);
    }
    return initialPositions;
  }
  private isHalfway(matchesPlayed: number, numPlayers: number): boolean {
    return (Math.ceil(numPlayers / matchesPlayed) === matchesPlayed);
  }
  private shuffle(array: User[]): User[] {
    // Fisher-Yates Shuffle, details here: https://bost.ocks.org/mike/shuffle/
    let m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  private sort(array: User[]): User[] {
    // insertion sort - bad performance but n < 10 so not an issue
    // more info - https://brilliant.org/wiki/insertion/
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      let j = i - 1;
      while ( j >= 0 && array[j].inSeasonPoints <= current.inSeasonPoints) {
        if (array[j].inSeasonPoints === current.inSeasonPoints &&
            array[j].inSeasonGoalDifferential > current.inSeasonGoalDifferential) {
              // check goal differential to move it down if points same
            break;
        }
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = current;
    }
    return array;
  }
}
