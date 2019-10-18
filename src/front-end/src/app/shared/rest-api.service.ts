import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../shared/player';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:4200'; //Use a proxy for a CORS request

  constructor(private http: HttpClient) { }

  /*===================================
  | Methods for consuming RESTful API |
  ====================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch player
  searchPlayer(criteria): Observable<Player> {
    console.log(this.apiURL + '/api/player?name=' + criteria);
     return this.http.get<Player>(this.apiURL + '/api/player?name=' + criteria)
     .pipe(
       retry(1),
       catchError(this.handleError)
     )
  }  

  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}