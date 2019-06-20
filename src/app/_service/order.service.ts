import { Product } from '../_models/product';
import { OrderedProduct } from '../_models/orderedProduct'
import { Order } from '../_models/order';

import { ProductService } from './product.service'
import { OrderedProductsService } from './ordered-products.service';


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
                // shipmentData: {
                //     fullName: "Hamada UI",
                //     phone: "22222222",
                //     email: "hamada@iti.com",
                //     address: 'iti address',
                //     country: 'Egypt',
                //     city: 'cairo',
                //     district: '6th october',
                //     postalCode: '11111'
                // },
                deliveryMethod: 1,
                paymenMethod: '',
                invoice: {
                    subtotal: 0
                },
                productList: this.productOrders,
            }

    }

    getorder(): Order {
        return this.orders;
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

    addProduct(product: Product) {
        this.productService.addProduct(product);
    }

    updateOrder(order: Order) {
        this.orders = order;
    }

    // deleteOrder(id: string) {
    //     const index = this.orders.findIndex(orders => orders.id === id);
    //     this.orders.splice(index, 1);
    // }
}