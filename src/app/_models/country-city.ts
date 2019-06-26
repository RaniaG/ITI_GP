export class Country {
    id: number;
    name: string;
}

export class City {
    id: number;
    name: string;
    countryId: number
}

export class District {
    id: number;
    name: string;
    cityId: number
}