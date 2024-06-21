import { Component } from '@angular/core';
import { Product } from '../../../core/intefaces/product';
import { ProductService } from '../../../core/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.css'
})
export class ProductsTableComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (response: Product[]) => {
        this.products = response;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }
}
