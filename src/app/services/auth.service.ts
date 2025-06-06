// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; 

  
  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    
    console.log('AuthService: Attempting login for', username);

    if (username === 'amit' && password === 'abcd1234') {
      this.isAuthenticated = true;
    
      return of(true).pipe(
        delay(500),
        tap(() => console.log('AuthService: Login successful'))
      );
    } else {
      this.isAuthenticated = false;      
      return of(false).pipe(
        delay(500),
        tap(() => console.log('AuthService: Login failed'))
      );
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
      }
  getToken(): string | null {
        console.warn('AuthService: getToken() method is not fully implemented for a real token retrieval.');
    return null; 
  }

  getUserRoles(): string[] {    
    console.log('AuthService: Returning simulated user roles.');
    return ['ROLE_ADMIN'];
  }
}