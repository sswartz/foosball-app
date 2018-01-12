import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Match } from '../classes/match';
import { PlayerPosition } from '@app/core/classes/player-position';

const PLAYER_TOTAL = 4;
@Injectable()
export class SeasonService {
  playerNumber: number;
  benchTime: number[];

  constructor(
  ) {
  }

  setInitialLocations(players: User[]): User[] {
    players = this.shuffle(players);
    players.forEach((value, index, array) => {
      value.benchTime = 0;
      value.seasonIndex = index;
    });
    return players;
  }
  private addBenchTime(bench: User[]): User[] {
    bench.forEach((value: User) => {
      value.benchTime++;
    });
    return bench;
  }
  private getMinBenchTime(players: User[]): number {
    let minBench = 1000;
    players.forEach((player: User) => {
      minBench = (player.benchTime < minBench) ? player.benchTime  : minBench;
    });
    return minBench;
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
  private cutPossibleActiveToActive(possiblePositions: PlayerPosition): PlayerPosition {
    const positions = new PlayerPosition();
    possiblePositions.players = this.shuffle(possiblePositions.players);
    positions.players  = possiblePositions.players.slice(1, 4);
    positions.bench = possiblePositions.players.slice(4); // set rest of possible actives to bench
    possiblePositions.bench.forEach( (player: User) => {
      positions.bench.push(player);
    });
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

  setNextMatchup(players: User[], matchesPlayed: number): PlayerPosition {
    const playerTotal = 4;
    const benchTotal = players.length - playerTotal;
    let positions = new PlayerPosition();

    const minBench = this.getMinBenchTime(players);
    const initialPositions = this.setInitialPlayerPosition(players, minBench);
    const currentActivePlayerCount = initialPositions.players.length;
    if (currentActivePlayerCount >= 4) {
      // need to cut some possible active players
      positions = this.cutPossibleActiveToActive(initialPositions);
    } else { // not enough possible active players
      positions = this.addBenchToActive(initialPositions);
    }
    this.addBenchTime(positions.bench);
    positions.players = this.shuffle(positions.players);
    return positions;
  }
  playNextMatch(matchesPlayed: number, numPlayers: number): boolean {
    return matchesPlayed === numPlayers;
  }
  private isHalfway(matchesPlayed: number, numPlayers: number): boolean {
    return (Math.ceil(numPlayers / matchesPlayed) === matchesPlayed);
  }
  copyUserArray(players: User[]): User[] {
    const newPlayers = [];
    players.forEach( (value, index, array) => {
      newPlayers.push(value);
    });
    return newPlayers;
  }
  getPlayerLocationObj(players: User[]): PlayerPosition {
    const b1 = 'bluePlayer1';
    const b2 = 'bluePlayer2';
    const o1 = 'orangePlayer1';
    const o2 = 'orangePlayer2';
    const be1 = 'benchPlayer1';
    const be2 = 'benchPlayer2';

    if (players.length === 4) {
      return {
        players: players,
        bench: []
      };
    } else if (players.length === 5) {
      return {
        bluePlayer1: players[0],
        bluePlayer2: players[1],
        orangePlayer1: players[2],
        orangePlayer2: players[3],
        bench: [players[4]],
      };
    } else if (players.length === 6) {
      return {
        bluePlayer1: players[0],
        bluePlayer2: players[1],
        orangePlayer1: players[3],
        orangePlayer2: players[4],
        bench: [players[3], players[5]],
      };
    }
      return new PlayerPosition();
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

}
