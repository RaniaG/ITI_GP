import { Product } from './product';

interface Order {
    id: string;//guid
    status: string;
    date: Date;
    shippingAddress: {
        street: string
        city: string,
        country: string,
        district?: string,
        postalcode?: number,
    };
    deliveryMethod: number;
    paymenMethod: string;
    invoice: {
        subtotal: number,
        discount?: number,
        shippingFees?: number
    }
    productList: Product[];
}   