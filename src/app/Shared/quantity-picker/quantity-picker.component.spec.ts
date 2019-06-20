import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityPickerComponent } from './quantity-picker.component';

describe('QuantityPickerComponent', () => {
  let component: QuantityPickerComponent;
  let fixture: ComponentFixture<QuantityPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
