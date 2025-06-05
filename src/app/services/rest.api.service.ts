
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  private apiURL = environment.apiUrl || 'http://localhost:8080';

  constructor(private http: HttpClient, private authservice: AuthService) {
  }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Http Options
  httpImageUploadOptions = {
    headers: new HttpHeaders({
    })
  };

  postAPI(uri: string, input : any): Observable<any> {
    return this.http.post<any>(this.apiURL + uri, JSON.stringify(input), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  putAPI(uri: string, input : any): Observable<any> {
    return this.http.put<any>(this.apiURL + uri, JSON.stringify(input), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAPI(uri : string): Observable<any> {
    return this.http.get<any>(this.apiURL + uri, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteAPI(uri: string): Observable<any> {
    return this.http.delete<any>(this.apiURL + uri, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  handleError(error : any) {
    
    
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      
      // Get client-side error
      errorMessage = error.error.message;
    } else if (error.error) {
      
      // Get server-side error
      errorMessage = error.error.message || error.error;
    } else {
      
      errorMessage = error;
    }
    //window.alert(error);
    return throwError(errorMessage);
  }
}
