import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Glossary } from '../classes/glossary';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
};

@Injectable()
export class GlossaryService {

  private glossaryUrl = 'api/glossary';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET glossary from the server */
  getGlossary(): Observable<Glossary[]> {
    this.messageService.add('GlossaryService: fetched glossary');
    return this.http.get<Glossary[]>(this.glossaryUrl)
      .pipe(
        tap(glossary => this.log(`fetched glossary`)),
        catchError(this.handleError('getGlossary', []))
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
    this.messageService.add('UserService: ' + message);
  }

}
