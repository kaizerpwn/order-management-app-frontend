import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDataCardComponent } from './orders-data-card.component';

describe('OrdersDataCardComponent', () => {
  let component: OrdersDataCardComponent;
  let fixture: ComponentFixture<OrdersDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdersDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
