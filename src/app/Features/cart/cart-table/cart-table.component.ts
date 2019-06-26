import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/_models/Cart';
import { CartService } from 'src/app/_service/cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})

export class CartTableComponent implements OnInit {
  totalPrice: number;
  oldTotalPrice: number;

  @Input() cart: Cart[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.calculateOrderTotal();
  }

  ngDoCheck() {
    let Price = 0;
    this.cart.forEach(item => {
      Price += ((item.product.price ? item.product.price : 0) - (item.product.discount ? item.product.discount : 0)) * item.quantity;
    });
    if (Price != this.totalPrice) {
      this.totalPrice = Price;
      //update changed cart items in DB
    }
  }

  removeProduct(id: number) {
    this.cartService.delete(id);
  }

  calculateOrderTotal() {
    this.cart.forEach(item => {
      this.totalPrice += item.product.price - item.product.discount;
    });
  }

}


