import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  apiUrl: string = 'http://localhost:3000/heroes';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) {}

  // Show lists of item
  list(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Filter Heroes
  filterHeroes(title: string, query: string): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}?${query}=${title}`)
      .pipe(catchError(this.handleError));
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('please try again later.');
  }
}
