import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
 imports: [
  FormsModule,
  CommonModule
],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  userid = '';
  password = '';
  userIdError = '';
passwordError = '';

  private authService = inject(AuthService);
  private router = inject(Router);
isLoading: any;

  onLogin(): void {

  this.userIdError = '';
  this.passwordError = '';

  if (!this.userid.trim()) {
    this.userIdError = 'User ID is required';
  }

  if (!this.password.trim()) {
    this.passwordError = 'Password is required';
  }

  if (this.userIdError || this.passwordError) {
    return;
  }

  this.authService.login({
    userid: this.userid,
    password: this.password
  }).subscribe({

    next: (response: any) => {

      this.authService.saveToken(
        response.response.token
      );

      this.router.navigate(['/dashboard']);

    },

    error: () => {

      this.userIdError = 'Invalid User ID';
      this.passwordError = 'Invalid Password';

    }

  });

}
    }

