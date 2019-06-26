import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/_service/cart.service';
import { Cart } from 'src/app/_models/Cart';
import { OrderedProductsService } from 'src/app/_service/ordered-products.service';
import { OrderService } from 'src/app/_service/order.service';
import { ShipmentData } from 'src/app/_models/shipmentData';
import { CartTableComponent } from '../cart-table/cart-table.component';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart: Cart[];
  shipmentData: ShipmentData;


  @ViewChild(CartTableComponent) cartTable: CartTableComponent;


  constructor(private cartService: CartService, private order: OrderService, private orderedProduc: OrderedProductsService) { }

  ngOnInit() {
    this.cart = this.cartService.getAll();
  }

  shipmentDataHandler(shipment: ShipmentData) {
    this.shipmentData = shipment;
    console.log(this.shipmentData)
  }

  addOrder() {
    let cartItems = this.cartTable.cart;
    let packageShopsIds: string[];
    cartItems.forEach((item) => {
      if (!packageShopsIds.includes(item.product.shopId)) {
        packageShopsIds.push(item.product.shopId)
      }
    });


  }

}
