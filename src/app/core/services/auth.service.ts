import { Injectable } from '@angular/core';
import { LoginRequest } from '../types/auth/login-request';
import { Observable } from 'rxjs';
import { User } from '../intefaces/user';
import { baseUrl } from '../common/constants';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../types/auth/register-request';
import { Store } from '@ngrx/store';
import { AppState } from '../../shared/store/app.state';
import * as UserActions from '../../shared/store/user/user.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  login(loginRequest: LoginRequest): Observable<User> {
    return this.http.post<User>(`${baseUrl}/users/login`, loginRequest);
  }

  register(registerRequest: RegisterRequest): Observable<User> {
    return this.http.post<User>(`${baseUrl}/users/register`, registerRequest);
  }

  logout(): void {
    this.store.dispatch(UserActions.logout()); 
  }
}
