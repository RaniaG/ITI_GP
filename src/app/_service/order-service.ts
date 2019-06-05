import { Product } from '../_models/product';
import { OrderedProduct } from '../_models/orderedProduct'
import { Order } from '../_models/order';

import { ProductService } from './product-service'
import { OrderedProductsService } from './ordered-products-service';


export class OrderService {

    productService: ProductService;
    orderedProductService: OrderedProductsService;
    products: Product[];
    productOrders: OrderedProduct[];
    orders: Order;

    constructor() {
        this.productService = new ProductService();
        this.orderedProductService = new OrderedProductsService();
        this.products = this.productService.getAll();
        this.productOrders = this.orderedProductService.getAll();

        this.orders =
            {
                id: "orderId",
                status: 1,
                date: new Date(),
                shippingAddress: '',
                deliveryMethod: 1,
                paymenMethod: '',
                invoice: {
                    subtotal: 0
                },
                productList: this.productOrders,
            }

    }

    deletePrdouct(id: number) {
        const index = this.productOrders.findIndex(orders => orders.id === id);
        this.productOrders.splice(index, 1);
    }

    // getAll(): Order[] {
    //     return this.orders;
    // }

    // getById(id: string): Order {
    //     return this.orders.find(order => order.id === id);
    // }

    // addOrder(id: string, order: Order) {
    //     order.id = id;
    //     this.orders.push(order);
    // }

    // updateOrder(order: Order) {
    //     const index = this.orders.findIndex(e => e.id === order.id);
    //     this.orders[index] = order;
    // }

    // deleteOrder(id: string) {
    //     const index = this.orders.findIndex(orders => orders.id === id);
    //     this.orders.splice(index, 1);
    // }
}