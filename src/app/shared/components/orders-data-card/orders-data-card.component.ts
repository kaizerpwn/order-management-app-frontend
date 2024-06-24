import { Component } from '@angular/core';
import { OrderService } from '../../../core/services/order.service';
import { Order } from '../../../core/intefaces/order';

@Component({
  selector: 'app-orders-data-card',
  standalone: true,
  imports: [],
  templateUrl: './orders-data-card.component.html',
  styleUrl: './orders-data-card.component.css',
})
export class OrdersDataCardComponent {
  constructor(private orderService: OrderService) {}

  orders: Order[] = [];

  ngOnInit() {
    this.orderService.getAllOrders().subscribe({
      next: (response: Order[]) => {
        this.orders = response;
      },
      error: (response: Error) => {
        console.error(response);
      },
    });
  }
}
