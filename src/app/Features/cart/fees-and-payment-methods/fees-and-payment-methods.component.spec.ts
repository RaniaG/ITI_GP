import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesAndPaymentMethodsComponent } from './fees-and-payment-methods.component';

describe('FeesAndPaymentMethodsComponent', () => {
  let component: FeesAndPaymentMethodsComponent;
  let fixture: ComponentFixture<FeesAndPaymentMethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesAndPaymentMethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesAndPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
