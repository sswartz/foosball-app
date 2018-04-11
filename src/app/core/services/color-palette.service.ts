import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { ColorPalette } from '../classes/color-palette';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'MY_CUSTOM_HEADER': 'MY_CUSTOM_HEADER_VALUE',
    'Content-Type': 'application/json',
    'X-Api-Key': '2E94GxwMoP7m2PWFIZ1NwaP5gbYXNmKi1UCO8zCi',
  }),
};

@Injectable()
export class ColorPaletteService {

  private colorPaletteUrl = 'https://jh2acdiz2g.execute-api.us-east-2.amazonaws.com/dev/colorPalette';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  /** GET color palettes from the server */
  getColorPalettes(): Observable<ColorPalette[]> {
    this.messageService.add('ColorPaletteService: fetched color palettes');
    return this.http.get<ColorPalette[]>(this.colorPaletteUrl, httpOptions)
      .pipe(
        tap(colorPalette => this.log(`fetched color palettes`)),
        catchError(this.handleError('getColorPalettes', []))
      );
  }


  ///////// Save methods //////////

  /** POST: add a new user to the server  */
  addColorPalette (colorPalette: ColorPalette): Observable<ColorPalette> {
    return this.http.post<ColorPalette>(this.colorPaletteUrl, colorPalette, httpOptions) .pipe(
      tap((colorPalette: ColorPalette) => this.log(`added ColorPalette w/ id=${colorPalette.id}`)),
      catchError(this.handleError<ColorPalette>('addColorPalette'))
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
    this.messageService.add('ColorPaletteService: ' + message);
  }
}
