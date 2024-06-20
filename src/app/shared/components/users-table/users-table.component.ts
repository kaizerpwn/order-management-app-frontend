import { Component } from '@angular/core';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/intefaces/user';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.css'
})
export class UsersTableComponent {
  users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: (response: User[]) =>{
        this.users = response;
      },
      error: (error : Error) => {
        console.error(error)
      }
    })
  }
}
