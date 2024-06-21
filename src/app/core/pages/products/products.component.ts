import { Component } from '@angular/core';
import { ProductsTableComponent } from '../../../shared/components/products-table/products-table.component'; 

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductsTableComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
}
