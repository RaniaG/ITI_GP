import { Product } from './product';
import { User } from './user';

export interface Shop {
    id?: string,
    name: string,
    photo?: string,
    cover?: string,

    street?: string
    cityId?: number,
    countryId?: number,
    districtId?: number,
    postalcode?: number,

    rating?: number,
    about?: string,
    policy?: string,
    subscription?: number,
    followers?: User[],
    products?: Product[],
    sales?: number,
    deliveryAddresses?: { districtId: number, cityId: number, countryId: number }[]
}