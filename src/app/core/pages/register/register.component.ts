import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; 
import { Store } from '@ngrx/store';
import { AppState } from '../../../shared/store/app.state';
import { RegisterRequest } from '../../types/auth/register-request';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import * as UserActions from '../../../shared/store/user/user.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private store: Store<AppState>) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]+$/)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['user', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birth_date: ['', Validators.required],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        zip_code: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required]
      })
    }); 
  }

  submitForm() {
    if (this.registerForm.valid) {
      let registerRequest: RegisterRequest = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        email: this.registerForm.value.email,
        role: this.registerForm.value.role,
        first_name: this.registerForm.value.first_name,
        last_name: this.registerForm.value.last_name,
        birth_date: new Date(this.registerForm.value.birth_date),
        address: this.registerForm.value.address
      };

      this.authService.register(registerRequest).subscribe(
        (response) => {
          this.errorMessage = '';
          this.successMessage = 'Successfully registered.';

          this.store.dispatch(UserActions.loginSuccess({ user: response }));

          setTimeout(() => {
            this.successMessage = '';
            this.router.navigate(['/dashboard']);
          }, 1000);
        },
        (error: HttpErrorResponse) => {
          this.successMessage = '';
          if (error.status === 400) {
            this.errorMessage = 'Invalid registration details.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
          console.error('Registration failed!', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill all required fields to register.';
    }
  }
}
