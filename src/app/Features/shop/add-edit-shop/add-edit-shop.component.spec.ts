import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditShopComponent } from './add-edit-shop.component';

describe('AddEditShopComponent', () => {
  let component: AddEditShopComponent;
  let fixture: ComponentFixture<AddEditShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
