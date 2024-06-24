import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDataCardComponent } from './users-data-card.component';

describe('UsersDataCardComponent', () => {
  let component: UsersDataCardComponent;
  let fixture: ComponentFixture<UsersDataCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersDataCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
