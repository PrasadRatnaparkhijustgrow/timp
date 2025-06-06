import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardGroupComponent,
  TextColorDirective,
  CardComponent,
  CardBodyComponent,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective
} from '@coreui/angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Adjust the path as necessary
import { FormsModule } from '@angular/forms'; // <--- IMPORTANT: Import FormsModule
import { RestApiService } from '../../services/rest.api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardGroupComponent,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    FormsModule // <--- IMPORTANT: Add FormsModule here for ngModel
  ]
})
export class LoginComponent {

  // Initialize with empty strings, or actual default values if desired
  username = '';
  password = '';
  errorMessage = '';

  constructor(public restApi: RestApiService , private router: Router) { }

  onSubmit(): void {
    this.errorMessage = ''; // Clear previous error messages
    console.log('Login attempt with:', this.username, this.password); // For debugging

    const payload = { username: this.username, password: this.password };
     this.restApi.postAPI('/auth/login', payload).subscribe(
      data => {
        console.log('Login response:', data); // Log the response for debugging
        if (data) {
          console.log('Login successful, navigating to /dashboard'); // For debugging
          this.router.navigate(['/dashboard']); // Navigate to the dashboard on successful login
        } else {
          this.errorMessage = 'Invalid username or password.';
          console.log('Login failed: Invalid credentials'); // For debugging
        }
      },
      error => {
        // Handle API errors (e.g., network issues, server errors)
        this.errorMessage = 'An error occurred during login. Please try again later.';
        console.error('Login error:', error); // Log the actual error
      }
    );
  }
}