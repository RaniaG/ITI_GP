import { Product } from './product';
import { Order } from './order';

export class OrderedProduct {
    // id: number;
    orderId: number;
    order?: Order;
    productId: number;
    product?: Product;
    variations: {
        color?: string,
        size?: string,
    };
    quantity: number;
}   