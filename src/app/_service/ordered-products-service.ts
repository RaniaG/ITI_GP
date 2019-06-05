import { Product } from '../_models/product';
import { ProductService } from './product-service'
import { OrderedProduct } from '../_models/orderedProduct'


export class OrderedProductsService {

    productService: ProductService;
    products: Product[];
    productOrders: OrderedProduct[];
    constructor() {
        this.productService = new ProductService();
        this.products = this.productService.getAll();
        this.productOrders = [
            {
                id: 1,
                product: this.products[0],
                details: {
                    color: "red",
                    size: "L",
                },
                quantity: 1,
                price: this.products[0].price - this.products[0].discount
            },
            {
                id: 2,
                product: this.products[1],
                details: {
                    color: "yellow",
                    size: "M",
                },
                quantity: 1,
                price: this.products[1].price - this.products[1].discount
            }
        ]
    }

    getAll(): OrderedProduct[] {
        return this.productOrders;
    }

    getById(id: number): OrderedProduct {
        return this.productOrders.find(order => order.id === id);
    }

    addOrder(order: OrderedProduct) {
        order.id = this.productOrders[length - 1].id + 1;
        this.productOrders.push(order);
    }

    updateOrder(order: OrderedProduct) {
        const index = this.productOrders.findIndex(e => e.id === order.id);
        this.productOrders[index] = order;
    }

    deleteOrder(id: number) {
        const index = this.productOrders.findIndex(orders => orders.id === id);
        this.productOrders.splice(index, 1);
    }
}