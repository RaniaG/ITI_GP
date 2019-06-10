import { Component, OnInit } from '@angular/core';
import { OrderedProduct } from 'src/app/_models/orderedProduct';
import { OrderService } from 'src/app/_service/order.service';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  orderedProducts: OrderedProduct[];
  order: Order;
  totalPrice: number;
  oldTotalPrice: number;

  constructor(private orderService: OrderService) {
    this.totalPrice = 0;
  }

  ngOnInit() {
    this.order = this.orderService.orders;
    if (!this.orderedProducts)
      this.orderedProducts = this.orderService.orders.productList;
    this.calculateOrderTotal();
  }

  ngDoCheck() {
    let Price = 0;
    this.orderService.orders.productList.forEach(product => {
      product.price = product.price * product.quantity;
      console.log(product.price)
      Price += product.price;
    });
    if (Price != this.totalPrice) {
      this.orderedProducts = this.orderService.orders.productList;
      this.totalPrice = Price;
      this.order.invoice.subtotal = this.totalPrice;
    }
  }

  removeProduct(id: number) {
    this.orderService.deletePrdouct(id);
  }

  calculateOrderTotal() {
    this.orderedProducts.forEach(product => {
      this.totalPrice += product.price;
    });
    this.order.invoice.subtotal = this.totalPrice;
  }

}


