import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { baseUrl } from '../common/constants';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoginRequest } from '../types/auth/login-request';
import { User } from '../intefaces/user';
import { importProvidersFrom } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../../shared/store/user/user.effects';
import { UserReducer } from '../../shared/store/user/user.reducer';
import { RegisterRequest } from '../types/auth/register-request';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  const initialState = {};

  const rootReducer = {
    user: UserReducer,
  };

  const mockUser: User = {
    id: 1,
    username: 'test',
    email: 'testaccount@gmail.com',
    role: 'user',
    first_name: 'Test',
    last_name: 'Account',
    birth_date: new Date('2003-07-20'),
    address: {
      address_id: 1,
      street: 'Street Name 26',
      zip_code: '75351',
      city: 'Las Vegas',
      country: 'United States',
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        AuthService,
        importProvidersFrom(
          StoreModule.forRoot(rootReducer, { initialState }),
          EffectsModule.forRoot([UserEffects])
        ),
      ],
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in a user', () => {
    const loginRequest: LoginRequest = {
      username: 'ibrahim',
      password: '123123',
    };

    service.login(loginRequest).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${baseUrl}/users/login`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });

  it('should register a new user', () => {
    const registerRequest: RegisterRequest = {
      username: 'test',
      password: '123123',
      email: 'test@gmail.com',
      role: 'user',
      first_name: 'Test',
      last_name: 'Account',
      birth_date: new Date('2002-02-02'),
      address: {
        address_id: 1,
        street: 'Street Name 26',
        zip_code: '75351',
        city: 'Las Vegas',
        country: 'United States',
      },
    };

    service.register(registerRequest).subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${baseUrl}/users/register`);
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
  });
});
