import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(): void {
    // Add your login logic here (e.g., API calls, authentication)

    // Example: Assume username is 'admin' and password is 'password'
    if (this.username === 'admin' && this.password === 'password') {
      // Navigate to the home page after successful login
      this.router.navigate(['/home']);
    } else {
      // Show an error message or perform any other action for unsuccessful login
      console.log('Invalid username or password');
    }
  }
}
