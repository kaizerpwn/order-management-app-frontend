import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { OrderService } from './order.service';
import { Order } from '../intefaces/order';
import { baseUrl } from '../common/constants';
import { provideHttpClient } from '@angular/common/http';

describe('OrderService', () => {
  let service: OrderService;
  let httpMock: HttpTestingController;

  const mockOrders: Order[] = [
    {
      user_id: 1,
      order_id: 101,
      order_date: new Date('2021-01-01'),
      total_amount: 100.5,
      delivery_address: {
        address_id: 1,
        street: '123 Main St',
        zip_code: '12345',
        city: 'Anytown',
        country: 'USA',
      },
      source_address: {
        address_id: 2,
        street: '456 Side St',
        zip_code: '67890',
        city: 'Othertown',
        country: 'USA',
      },
      items: [
        {
          order_id: 101,
          product_id: 1,
          quantity: 2,
          item_price: 25.0,
        },
        {
          order_id: 101,
          product_id: 2,
          quantity: 1,
          item_price: 50.5,
        },
      ],
    },
    {
      user_id: 2,
      order_id: 102,
      order_date: new Date('2021-02-01'),
      total_amount: 200.75,
      delivery_address: {
        address_id: 3,
        street: '789 Another St',
        zip_code: '54321',
        city: 'Sometown',
        country: 'USA',
      },
      source_address: {
        address_id: 4,
        street: '1011 Different St',
        zip_code: '09876',
        city: 'Newtown',
        country: 'USA',
      },
      items: [
        {
          order_id: 102,
          product_id: 3,
          quantity: 3,
          item_price: 66.92,
        },
      ],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        OrderService,
      ],
    });

    service = TestBed.inject(OrderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all orders', () => {
    service.getAllOrders().subscribe((orders) => {
      expect(orders.length).toBe(2);
      expect(orders).toEqual(mockOrders);
    });

    const req = httpMock.expectOne(`${baseUrl}/orders`);
    expect(req.request.method).toBe('GET');
    req.flush(mockOrders);
  });
});
