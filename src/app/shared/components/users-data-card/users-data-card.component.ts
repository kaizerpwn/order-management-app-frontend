import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/intefaces/user';

@Component({
  selector: 'app-users-data-card',
  standalone: true,
  imports: [],
  templateUrl: './users-data-card.component.html',
  styleUrl: './users-data-card.component.css',
})
export class UsersDataCardComponent {
  constructor(private userService: UserService) {}

  users: User[] = [];

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
      },
      error: (response: Error) => {
        console.error(response);
      },
    });
  }
}
