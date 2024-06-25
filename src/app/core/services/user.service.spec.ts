import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { baseUrl } from '../common/constants';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { User } from '../intefaces/user';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  const mockUsers: User[] = [
    {
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
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(), provideHttpClientTesting(), UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all users', () => {
    service.getAllUsers().subscribe((users) => {
      expect(users.length).toBe(1);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(`${baseUrl}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});
