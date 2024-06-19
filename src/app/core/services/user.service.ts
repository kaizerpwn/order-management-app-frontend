import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../intefaces/user';
import { baseUrl } from '../common/constants';
import { LoginRequest } from '../types/auth/login-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/users`);
  }

  login(loginRequest: LoginRequest): Observable<User> {
    return this.http.post<User>(`${baseUrl}/users`, loginRequest);
  }
}
