import { Product } from './product';

export class OrderedProduct {
    id: number;
    product: Product;
    details?: {
        color?: string,
        size?: string,
    };
    quantity: number;
    invoice?: {
        price: number,
        discount?: number,
    };
    price: number;
}   