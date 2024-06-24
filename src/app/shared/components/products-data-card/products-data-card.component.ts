import { Component } from '@angular/core';
import { Product } from '../../../core/intefaces/product';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-products-data-card',
  standalone: true,
  imports: [],
  templateUrl: './products-data-card.component.html',
  styleUrl: './products-data-card.component.css',
})
export class ProductsDataCardComponent {
  constructor(private productService: ProductService) {}

  products: Product[] = [];

  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (response: Product[]) => {
        this.products = response;
      },
      error: (response: Error) => {
        console.error(response);
      },
    });
  }
}
