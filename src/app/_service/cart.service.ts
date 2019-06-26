import { Cart } from '../_models/Cart';
import { Product } from '../_models/product';
import { ProductService } from './product.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[];
  productService: ProductService;

  constructor() {
    this.cart = [
      {
        productId: 1,
        variations: {
          color: "red",
          size: "XL",
        },
        quantity: 1
      },
      {
        productId: 2,
        variations: {
          color: "red",
          size: "XL"
        },
        quantity: 1
      },
      {
        productId: 3,
        variations: {
          color: "red",
          size: "XL"
        },
        quantity: 1
      },
      {
        productId: 4,
        variations: {
          color: "red",
          size: "XL"
        },
        quantity: 1
      }
    ];

    this.productService = new ProductService();
  }

  //get Cart Items
  getAll(): Cart[] {
    console.log(this.productService)
    this.cart.map((cartItem) => {
      cartItem.product = this.productService.getById(cartItem.productId);
    })
    return this.cart;
  }

  //get One Cart Item by Product Id
  getByProductId(id: number): Cart {
    var result = this.cart.find((item) => item.productId === id);
    result.product = this.productService.getById(result.productId);
    return result;
  }

  //Add CartItem
  add(p: Product, variation: {}, quantity: number) {
    let newCart: Cart;
    newCart.productId = p.id;
    newCart.product = p;
    newCart.variations = variation;
    newCart.quantity = quantity;

    this.cart.push(newCart);
  }

  //Update CartItem
  update(cart: Cart) {
    const i = this.cart.findIndex(item => item.productId === cart.productId);
    this.cart[i] = cart;
  }

  //Delete CartItem
  delete(productId: number) {
    const i = this.cart.findIndex(item => item.productId === productId);
    this.cart.splice(i, 1);
  }

}