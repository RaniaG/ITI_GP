import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CountryCityService } from 'src/app/_service/country-city.service';
import { Country, City } from 'src/app/_models/country-city';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;
  countries :Country[]; 
  cities : City[];

  constructor(private countryCityService: CountryCityService) { 


  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      txtFN : new FormControl(),
      txtLN : new FormControl(),
      txtUN : new FormControl(),
      phoneNumber: new FormControl(),
      email :new FormControl(),
      password : new FormControl(),
      confirmPW : new FormControl(),
      txtStreet : new FormControl(),
      txtBuilding: new FormControl(),
      txtApartment : new FormControl(),
      country :new FormControl(),
      city: new FormControl(),
      gender: new FormControl('Male'),



      
    })
       
          this.countries = this.countryCityService.getAllCountries();
          
        
  }

  countryChange(countryId : number){
    this.cities=null;
    if(countryId){
      this.cities = this.countryCityService.getCitiesByCountryId(countryId);
    }

  }


  onSubmit(){
         console.log(this.signUpForm);
  }

}
