import { Country, City, District } from './country-city';

export class ShipmentData {
    id?: number;
    ContactName: string;
    phone: string;
    ContactEmail: string;
    FullAddress: string;
    country?: Country;
    city?: City;
    district?: District;
    postalCode?: number;
}

