import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../../_service/order.service';
import { CountryCityService } from '../../../_service/country-city.service';
import { Country, City, District } from 'src/app/_models/country-city';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-add-address-form',
  templateUrl: './add-address-form.component.html',
  styleUrls: ['./add-address-form.component.scss']
})
export class AddAddressFormComponent implements OnInit {

  addAddressData: FormGroup;
  order: Order;

  countries: Country[];
  cities: City[];
  districts: District[];

  countryName: string;
  cityName: string;
  districtName: string;

  showAddAddressModal: boolean;

  constructor(private orderService: OrderService, private countryCityService: CountryCityService) {
    this.showAddAddressModal = false;
  }

  ngOnInit() {
    this.order = this.orderService.getorder();

    this.addAddressData = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^([^0-9]*)$')
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      fullAddress: new FormControl('', [
        Validators.required
      ]),
      country: new FormControl('', [
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required
      ]),
      district: new FormControl('', [
        Validators.required
      ]),
      postalCode: new FormControl('')
    });

    if (!this.countries) {
      this.countries = this.countryCityService.getAllCountries();
    }
  }


  onChangeCountry(countryId: number) {
    this.cities = null;
    this.districts = null;
    if (countryId) {
      this.cities = this.countryCityService.getCitiesByCountryId(countryId);
    }
  }

  onChangeCity(cityId: number) {
    this.districts = null;
    if (cityId) {
      this.districts = this.countryCityService.getDistrictsByCityId(cityId);
    }
  }

  handleAddAddress(action: string) {
    switch (action) {
      case 'Save':
        if (this.addAddressData.status === "valid") {
          this.countryName = this.countryCityService.getCountryById(parseInt(this.addAddressData.value.country)).name;
          this.cityName = this.countryCityService.getCityById(parseInt(this.addAddressData.value.city)).name;
          this.districtName = this.countryCityService.getDistrictById(parseInt(this.addAddressData.value.district)).name;
          this.order.shipmentData = {
            fullName: this.addAddressData.value.fullName,
            phone: this.addAddressData.value.phoneNumber,
            email: this.addAddressData.value.email,
            address: this.addAddressData.value.fullAddress,
            country: this.addAddressData.value.country,
            city: this.addAddressData.value.city,
            district: this.addAddressData.value.ditrict,
            postalCode: this.addAddressData.value.postalCode ? this.addAddressData.value.postalCode : ''
          }
          this.showAddAddressModal = false;
          break;
        }
      case 'Close':
      case 'Cancel':
      default:
        this.showAddAddressModal = false;
        break;
    }
  }
}


