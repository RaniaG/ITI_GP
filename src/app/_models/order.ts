import { OrderedProduct } from './orderedProduct';

export class Order {
    packageId: string;//seller order id
    id?: string;//guid // buyer order id
    shopId: string;
    status: string;
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