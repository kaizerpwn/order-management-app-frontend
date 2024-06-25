import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Product } from '../intefaces/product';
import { baseUrl } from '../common/constants';
import { provideHttpClient } from '@angular/common/http';
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  const mockProducts: Product[] = [
    {
      product_id: 1,
      product_name: 'Chair',
      price: 500,
      available_from: new Date('2024-06-05'),
      available_until: new Date('2024-06-30'),
      available_quantity: 10,
    },
    {
      product_id: 2,
      product_name: 'Table',
      price: 250,
      available_from: new Date('2024-06-05'),
      available_until: new Date('2024-06-30'),
      available_quantity: 20,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ProductService,
      ],
    });

    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all products', () => {
    service.getAllProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(`${baseUrl}/product`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });
});
