import { Component } from '@angular/core';
import { OrdersTableComponent } from '../../../shared/components/orders-table/orders-table.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [OrdersTableComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

}
