import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { CountryCityService } from 'src/app/_service/country-city.service';
import { Country, City } from 'src/app/_models/country-city';
import { UserService } from 'src/app/_service/user.service';
import { from } from 'rxjs';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  countries: Country[];
  cities: City[];
  user: User;
  loginResult: number = null;
  constructor(private userService: UserService) {


  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      LastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      UserName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/)]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*\d).{4,8}$')]),
      confirmPassword: new FormControl('', this.MustMatch('password', 'confirmPassword')),
      gender: new FormControl('Male'),

    })




  }




  onSubmit(e) {
    e.preventDefault();

    if (this.signUpForm.valid) {
      this.user = this.signUpForm.value;
      this.userService.add(this.user).subscribe(res => {
        // debugger;
        this.loginResult = 1;
      }, err => {
        this.loginResult = 2;
        // debugger;
      })

    }
  }

  MustMatch(control1: string, control2: string): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      let result: ValidationErrors;
      if (control.parent) {
        let form = control.parent;
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
