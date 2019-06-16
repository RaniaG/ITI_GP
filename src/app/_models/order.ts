import { OrderedProduct } from './orderedProduct';

export class Order {
    id: string;//guid
    status: number;
    date: Date;
    // shippingAddress: string;
    shipmentData?: {
        fullName: string;
        phone: string;
        email: string;
        address: string;
        country: string;
        city: string;
        district: string;
        postalCode: string;
    };
    deliveryMethod: number;
    paymenMethod: string;
    invoice: {
        subtotal: number,
        totalDiscount?: number,
        totalShippingFees?: number
    }
    productList: OrderedProduct[];
}   