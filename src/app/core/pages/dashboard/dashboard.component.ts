import { Component } from '@angular/core';
import { UsersDataCardComponent } from '../../../shared/components/users-data-card/users-data-card.component';
import { OrdersDataCardComponent } from '../../../shared/components/orders-data-card/orders-data-card.component';
import { ProductsDataCardComponent } from '../../../shared/components/products-data-card/products-data-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    UsersDataCardComponent,
    OrdersDataCardComponent,
    ProductsDataCardComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
