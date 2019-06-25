import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';
import { CountryCityService } from 'src/app/_service/country-city.service';
import { Country, City } from 'src/app/_models/country-city';
import { AuthService } from 'src/app/_auth/auth.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {


  constructor(private authService: AuthService, private countryCityService: CountryCityService) { }
  editProfileForm: FormGroup;
  validator: ValidatorFn;
  countries: Country[];
  cities: City[];
  public imagePath;
  // imgURL: any = this.user.getById(1).photo;
  public message: string;
  currentInput;
  onFileSelected(event) {
    console.log(this.currentInput);
  }
  preview(files) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      // this.imgURL = reader.result;

    }
  }
  ngOnInit() {
    this.editProfileForm = new FormGroup({
      'firstname': new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'lastname': new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'username': new FormControl(this.authService.currentUser.userName, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'email': new FormControl(this.authService.currentUser.email, [Validators.required, Validators.email]),
      'bio': new FormControl(this.authService.currentUser.bio),
      'photo': new FormControl(this.authService.currentUser.photo),
      'changePassword': new FormControl('', [Validators.required, Validators.pattern('^(?=.*\d).{4,8}$')]),
      'confirmPassword': new FormControl('', this.MustMatch('changePassword', 'confirmPassword')),
    });
    this.countries = this.countryCityService.getAllCountries();

  }
  onSubmit(editProfileForm) {
    console.log(editProfileForm);
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
  countryChange(countryId: number) {
    this.cities = null;
    if (countryId) {
      this.cities = this.countryCityService.getCitiesByCountryId(countryId);
    }
  }
}
