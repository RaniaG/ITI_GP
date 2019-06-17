import { Country, City, District } from '../_models/country-city';

export class CountryCityService {

    country: Country[];
    city: City[];
    district: District[];

    constructor() {
        this.country = [
            {
                id: 1,
                name: "Egypt"
            },
            {
                id: 2,
                name: "USA"
            }
        ];
        this.city = [
            {
                id: 1,
                name: "Cairo",
                FK_Country: 1
            },
            {
                id: 2,
                name: "Giza",
                FK_Country: 1
            },
            {
                id: 3,
                name: "California",
                FK_Country: 2
            },
            {
                id: 4,
                name: "Washington",
                FK_Country: 2
            }
        ];
        this.district = [
            {
                id: 1,
                name: "Nasr City",
                FK_City: 1
            },
            {
                id: 2,
                name: "Old Cairo",
                FK_City: 1
            },
            {
                id: 3,
                name: "El-Haram",
                FK_City: 2
            },
            {
                id: 4,
                name: "6th October",
                FK_City: 2
            },
            {
                id: 5,
                name: "Los Angeles",
                FK_City: 3
            },
            {
                id: 6,
                name: "San Francisco",
                FK_City: 3
            },
            {
                id: 7,
                name: "Seatle",
                FK_City: 4
            },
            {
                id: 8,
                name: "Vancouver",
                FK_City: 4
            },
        ]
    }

    getAllCountries(): Country[] {
        return this.country;
    }

    getCountryById(id: number): Country {
        return this.country.find(country => country.id === id);
    }

    getAllCities(): City[] {
        return this.city;
    }

    getCityById(id: number): City {
        return this.city.find(city => city.id === id);
    }

    getCitiesByCountryId(id: number): City[] {
        return this.city.filter(city => city.FK_Country == id);
    }

    getAllDistricts(): District[] {
        return this.district;
    }

    getDistrictById(id: number): District {
        return this.district.find(district => district.id === id);
    }

    getDistrictsByCityId(id: number): District[] {
        return this.district.filter(district => district.FK_City == id)
    }

}