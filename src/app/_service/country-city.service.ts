import { Country, City, District } from '../_models/country-city';
import { HttpClient } from '@angular/common/http';
import { baseurl } from '../_utilities/baseUrl';
import { forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class CountryCityService {

    countries: Country[] = [];
    cities: City[] = [];
    districts: District[] = [];
    isLoaded: boolean = false;
    constructor(private http: HttpClient) {
    }

    private getAll() {
        forkJoin(this.http.get(`${baseurl}/api/Countries`), this.http.get(`${baseurl}/api/Cities`),
            this.http.get(`${baseurl}/api/Districts`)).subscribe((results) => {
                const [countries, cities, districts] = results;
                this.countries = countries as Country[];
                this.cities = cities as City[];
                this.districts = districts as District[];
                this.isLoaded = true;
            }, error => console.log(error))

    }
    getAllCountries(): Country[] {
        if (!this.isLoaded)
            this.getAll();
        return this.countries;
    }

    getCountryById(id: number): Country {
        if (!this.isLoaded)
            this.getAll();
        return this.countries.find(country => country.id === id);
    }

    getAllCities(): City[] {
        return this.cities;
    }

    getCityById(id: number): City {
        return this.cities.find(city => city.id === id);
    }

    getCitiesByCountryId(id: number): City[] {
        return this.cities.filter(city => city.CountryId == id);
    }

    getAllDistricts(): District[] {
        return this.districts;
    }

    getDistrictById(id: number): District {
        return this.districts.find(district => district.id === id);
    }

    getDistrictsByCityId(id: number): District[] {
        return this.districts.filter(district => district.CityId == id)
    }

}