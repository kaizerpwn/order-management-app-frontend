import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../types/auth/login-request';
import { UserService } from '../../services/user.service'; 
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/store/app.state';
import * as UserActions from '../../../shared/store/user/user.actions';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private store: Store<AppState>) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  submitForm() {
    if(this.loginForm.valid) {
      let loginRequest: LoginRequest = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      };

      this.authService.login(loginRequest).subscribe(
        (response) => {
          this.errorMessage = '';
          this.successMessage = 'Successfully logged in.'; 
          this.store.dispatch(UserActions.loginSuccess({ user: response })); 

          setTimeout(() => {
            this.successMessage = '';
            this.router.navigate(['/dashboard']);
          }, 1000); 
        },
        (error: HttpErrorResponse) => {
          this.successMessage = '';
          if (error.status === 404) {
            this.errorMessage = 'Username and password do not match any user in the database.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
          console.error('Login failed!', error); 
        }
      );
    }
    else {
      this.errorMessage = 'Please fill all input fields to sign in.';
    }
  }
}
