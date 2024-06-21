import { Component } from '@angular/core';
import { UsersTableComponent } from '../../../shared/components/users-table/users-table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UsersTableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
