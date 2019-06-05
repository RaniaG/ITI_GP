import { OrderedProduct } from './orderedProduct';

export class Order {
    id: string;//guid
    status: number;
    date: Date;
    shippingAddress: string;
    deliveryMethod: number;
    paymenMethod: string;
    invoice: {
        subtotal: number,
        discount?: number,
        shippingFees?: number
    }
    productList: OrderedProduct[];
}   