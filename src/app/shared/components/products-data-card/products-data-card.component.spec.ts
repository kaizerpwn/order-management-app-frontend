import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDataCardComponent } from './products-data-card.component';

describe('ProductsDataCardComponent', () => {
  let component: ProductsDataCardComponent;
  let fixture: ComponentFixture<ProductsDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
