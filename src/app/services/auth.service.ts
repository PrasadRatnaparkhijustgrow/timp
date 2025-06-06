
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'; 
=======
>>>>>>> origin/dev

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuthenticated = false; 

<<<<<<< HEAD
  
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
=======
  constructor(){}

>>>>>>> origin/dev

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
<<<<<<< HEAD
      }
  getToken(): string | null {
        console.warn('AuthService: getToken() method is not fully implemented for a real token retrieval.');
    return null; 
  }

  getUserRoles(): string[] {    
    console.log('AuthService: Returning simulated user roles.');
    return ['ROLE_ADMIN'];
  }
=======
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserRoles(): string[] {
    return ['ROLE_ADMIN'];  }
>>>>>>> origin/dev
}