import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,ValidatorFn,ValidationErrors} from '@angular/forms';
import { CountryCityService } from 'src/app/_service/country-city.service';
import { Country, City } from 'src/app/_models/country-city';
import { UserService } from 'src/app/_service/user.service';
import { from } from 'rxjs';
import { User } from 'src/app/_models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;
  countries :Country[]; 
  cities : City[];
  user : User;

  constructor(private countryCityService: CountryCityService,private userService : UserService,private router: Router) { 


  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      txtFN : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      txtLN : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      txtUN : new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      phoneNumber: new FormControl('',[Validators.required]),
      email :new FormControl('',[Validators.required, Validators.email]),
      password : new FormControl('',[Validators.required,Validators.pattern('^(?=.*\d).{4,8}$')]),
      confirmPW :  new FormControl('', this.MustMatch('password', 'confirmPW')),
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
         if(this.signUpForm.valid){
               this.user = this.signUpForm.value;
               this.userService.add(this.user);
               this.router.navigate(['/home'])
         }
  }

  MustMatch(control1: string, control2: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let result: ValidationErrors;
      if (control.parent) {
        let form = control.parent;
        // console.log(control.parent);
        if (form.get(control1).value !== form.get(control2).value) {
          result = { compare: true };
        }
        else {
          result = null;
        }
      }
      return result;
    }
  }

}
