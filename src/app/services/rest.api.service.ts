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

  // Define API
  private apiURL = environment.apiUrl || 'http://localhost:8080';

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

    console.error('API Error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}