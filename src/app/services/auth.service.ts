import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
    throw new Error('Method not implemented.');
  }
  getUserRoles(): string[] {
    // Fetch roles from backend API or local storage. ['ROLE_ADMIN', 'ROLE_VENDOR', 'ROLE_WORKER']
    return ['ROLE_ADMIN']; 
  }
}
