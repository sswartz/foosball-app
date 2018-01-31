import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Match } from '@app/core';
import { User } from '@app/core';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class MatchService {

  private matchesUrl = 'api/matches'; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  createMatchObj(blueScore: number, orangeScore: number, players: User[]): Match {
    if (players.length === 4) {
      const match = new Match(blueScore, orangeScore, 1, 2, new Date(), 2);
      match.blueUserId1 = players[0].id;
      match.blueUserId2 = players[1].id;
      match.orangeUserId1 = players[2].id;
      match.orangeUserId2 = players[3].id;
      match.blueUserNames = `${players[0].name} and ${players[1].name}`;
      match.orangeUserNames = `${players[2].name} and ${players[3].name}`;
      return match;
    } else if (players.length === 3) {
      const match = new Match(blueScore, orangeScore, 1, 2, new Date(), 3);
      match.blueUserId1 = players[0].id;
      match.blueUserId2 = players[1].id;
      match.orangeUserId1 = players[2].id;
      match.blueUserNames = `${players[0].name} and ${players[1].name}`;
      match.orangeUserNames = `${players[2].name}`;
      return match;
    } else if (players.length === 1) {
      const match = new Match(blueScore, orangeScore, 1, 2, new Date(), 1);
      match.blueUserId1 = players[0].id;
      match.orangeUserId1 = players[1].id;
      match.blueUserNames = `${players[0].name}`;
      match.orangeUserNames = `${players[1].name}`;
      return match;
    }
  }

  /** GET matches from the server */
  getMatches(): Observable<Match[]> {
    this.messageService.add('MatchService: fetched matches');
    return this.http.get<Match[]>(this.matchesUrl)
      .pipe(
        tap(matches => this.log(`fetched matches`)),
        catchError(this.handleError('gotMatches', []))
      );
  }

  /** GET match by id. Return `undefined` when id not found */
  getMatchNo404<Data>(id: number): Observable<Match> {
    const url = `${this.matchesUrl}/?id=${id}`;
    return this.http.get<Match[]>(url).pipe(
      map(matches => matches[0]), // returns a {0|1} element array
      tap( u => {
        const outcome = u ? `fetched` : `did not find`;
        this.log(`${outcome} user id=${id}`);
      }),
      catchError(this.handleError<Match>(`getMatch id=${id}`))
    );
  }

  getMatch(id: number): Observable<Match> {
    const url = `${this.matchesUrl}/?id=${id}`;
    return this.http.get<Match>(url).pipe(
      tap(_ => this.log(`fetched match id=${id}`)),
      catchError(this.handleError<Match>(`getMatch id=${id}`))
    );
  }
  ///////////// Save Methods /////////////

  /** POST: add a new match to the server */
  addMatch(match: Match): Observable<Match> {
    return this.http.post<Match>(this.matchesUrl, match, httpOptions).pipe(
      tap((match: Match) => this.log(`added match w/ id=${match.id}`)),
      catchError(this.handleError<Match>('addMatch'))
    );
  }

  /** PUT: update a match on the server */
  updateMatch(match: Match): Observable<any> {
    return this.http.put(this.matchesUrl, match, httpOptions).pipe(
      tap(_ => this.log(`updated match id=${match.id}`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a User Service message with the Message Service */
  private log(message: string) {
    this.messageService.add('MatchService: ' + message);
  }

}
