import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-picker',
  templateUrl: './quantity-picker.component.html',
  styleUrls: ['./quantity-picker.component.scss']
})
export class QuantityPickerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  quantityValue = 1;

  @Input()
  get quantity() {
    return this.quantityValue;
  }

  @Output() quantityChange = new EventEmitter();
  set quantity(value) {
    this.quantityValue = value;
    this.quantityChange.emit(this.quantityValue);
  }

  decrement() {
    if (this.quantity > 1)
      this.quantity--;
  }

  increment() {
    if (this.quantity < 50)
      this.quantity++;
  }

}
