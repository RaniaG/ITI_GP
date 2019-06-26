import { OrderedProduct } from './orderedProduct';
import { ShipmentData } from './shipmentData';

export class Order {
    packageId?: string;//seller order id
    id?: string;//guid // buyer order id
    shopId?: string;
    status: number;
    date?: Date;
    // shippingAddress: string;
    shipmentDataId?: number;
    shipmentData?: ShipmentData;
    deliveryMethod: string;
    paymentMethod: string;
    invoice?: {
        subtotal: number,
        totalDiscount?: number,
        totalShippingFees?: number
    }
    productList?: OrderedProduct[];
}   