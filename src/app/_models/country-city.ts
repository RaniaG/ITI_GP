export class Country {
    id: number;
    name: string;
}

export class City {
    id: number;
    name: string;
    CountryId: number
}

export class District {
    id: number;
    name: string;
    CityId: number
}