import { Product } from './product';

export class Cart {
    productId: number;
    product?: Product;
    variations: {};
    quantity: number;
}