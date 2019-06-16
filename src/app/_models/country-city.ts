export class Country {
    id: number;
    name: string;
}

export class City {
    id: number;
    name: string;
    FK_Country: number
}

export class District {
    id: number;
    name: string;
    FK_City: number
}