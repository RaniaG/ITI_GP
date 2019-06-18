import { OrderedProduct } from './orderedProduct';

export interface OrderBrief {
    packageId: string;
    status: string;
    date: Date;
    shipmentData: {
        fullName?: string;
        phone?: string;
        email?: string;
        address: string;
        country: string;
        city: string;
        district: string;
        postalCode: string;
    };
    totalDue: number;
    productList: OrderedProduct[];
}