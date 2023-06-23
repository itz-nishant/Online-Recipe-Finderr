import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private router: Router) {}

  register(): void {
    // Add your registration logic here (e.g., API calls, validation)

    // Example: Display the registered user details and navigate to login page
    console.log('Registered User:');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Email:', this.email);

    // Navigate to the login page after successful registration
    this.router.navigate(['/login']);
  }
}
