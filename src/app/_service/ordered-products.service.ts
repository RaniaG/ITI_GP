import { Product } from '../_models/product';
import { ProductService } from './product.service'
import { OrderedProduct } from '../_models/orderedProduct'
import { Order } from '../_models/order';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class OrderedProductsService {

    productService: ProductService;
    products: Product[];
    productOrders: OrderedProduct[];
    constructor() {
        this.productService = new ProductService();
        this.products = this.productService.getAll();
        this.productOrders = [
            {
                orderId: 1,
                productId: 1,
                variations: {
                    color: "red",
                    size: "XL"
                },
                quantity: 2
            },
            {
                orderId: 1,
                productId: 1,
                variations: {
                    color: "red",
                    size: "XL"
                },
                quantity: 2
            },
        ]
    }

    // getAll(): OrderedProduct[] {
    //     return this.productOrders;
    // }

    // getById(id: number): OrderedProduct {
    //     return this.productOrders.find(order => order.orderId === id);
    // }

    // addOrder(order: OrderedProduct) {
    //     order.orderId = this.productOrders[length - 1].id + 1;
    //     this.productOrders.push(order);
    // }

    // updateOrder(order: OrderedProduct) {
    //     const index = this.productOrders.findIndex(e => e.id === order.id);
    //     this.productOrders[index] = order;
    // }

    // deleteOrder(id: number) {
    //     const index = this.productOrders.findIndex(orders => orders.id === id);
    //     this.productOrders.splice(index, 1);
    // }
}