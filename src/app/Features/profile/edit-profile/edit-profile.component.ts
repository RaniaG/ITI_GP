import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor() { }
  editProfileForm: FormGroup;
  validator: ValidatorFn;
  ngOnInit() {
    this.editProfileForm = new FormGroup({
      'firstname': new FormControl('bassant', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'lastname': new FormControl('Mohamed', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'username': new FormControl('bassant fahmy', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'email': new FormControl('bassantfahmy@gmail.com', [Validators.required, Validators.email]),
      'changePassword': new FormControl('12345678'),
      'confirmPassword': new FormControl('12345678')
      // 'confirmPassword': new FormControl('12345678', this.MustMatch('changePassword', 'confirmPassword'))
    });
  }
  onSubmit(editProfileForm) {
    console.log(editProfileForm);
  }
  MustMatch(control1: string, control2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      let result: ValidationErrors;
      if (control.get(control1).value !== control.get(control2).value) {
        result = { compare: true };
      }
      else {
        result = null;
      }
      return result;
    }
  }
  // MustMatch=(control1: string, control2: string): ValidatorFn =>{
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     let result: ValidationErrors;
  //     if (control.get(control1).value !== control.get(control2).value) {
  //       result = { compare: true };
  //     }
  //     else {
  //       result = null;
  //     }
  //     return result;
  //   }
  // }

}
