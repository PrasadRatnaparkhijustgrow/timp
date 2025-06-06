import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
<<<<<<< HEAD
  private apiURL = environment.apiUrl || 'http://localhost:8445/api';
=======

  // Define API
  private apiURL = environment.apiUrl || 'http://localhost:8080';
>>>>>>> origin/dev

  constructor(private http: HttpClient, private authService: AuthService) {}

  // Default HTTP headers
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  postAPI(uri: string, input: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}${uri}`, input, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  putAPI(uri: string, input: any): Observable<any> {
    return this.http.put<any>(`${this.apiURL}${uri}`, input, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  getAPI(uri: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}${uri}`, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

  deleteAPI(uri: string): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}${uri}`, this.getHttpOptions())
      .pipe(catchError(this.handleError));
  }

<<<<<<< HEAD
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unexpected error occurred.';
    
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else if (error.status) {
      errorMessage = `Server-side error [${error.status}]: ${error.message}`;
=======
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
>>>>>>> origin/dev
    }

    console.error('API Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}