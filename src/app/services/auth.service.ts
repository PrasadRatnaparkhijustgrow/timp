// auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; // If using HTTP for real auth

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // Simple state for demonstration

  // If you uncomment HttpClient, ensure it's imported from '@angular/common/http'
  constructor(/* private http: HttpClient */) { }

  login(username: string, password: string): Observable<boolean> {
    // ---- SIMULATED AUTHENTICATION (replace with actual API call) ----
    console.log('AuthService: Attempting login for', username);

    if (username === 'amit' && password === 'abcd1234') {
      this.isAuthenticated = true;
      // Simulate API delay and return true on success
      return of(true).pipe(
        delay(500),
        tap(() => console.log('AuthService: Login successful'))
      );
    } else {
      this.isAuthenticated = false;
      // Simulate API delay and return false on failure
      // It's important to return the Observable here, not just perform an action.
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
    // Optionally, clear token from localStorage here if it was stored
    // localStorage.removeItem('authToken');
  }

  // Changed getToken to return a string or null/undefined, as typically
  // tokens are strings. Throwing an error here without a clear reason
  // might not be ideal for a getter.
  getToken(): string | null {
    // In a real application, you'd retrieve the token from localStorage
    // or a secure storage mechanism after a successful login.
    // Example: return localStorage.getItem('authToken');
    console.warn('AuthService: getToken() method is not fully implemented for a real token retrieval.');
    return null; // Return null if no token is found/implemented
  }

  getUserRoles(): string[] {
    // In a real application, fetch roles from backend API or decode from JWT token.
    // For this simulation, it returns a static array.
    // Example: ['ROLE_ADMIN', 'ROLE_VENDOR', 'ROLE_WORKER']
    console.log('AuthService: Returning simulated user roles.');
    return ['ROLE_ADMIN'];
  }
}