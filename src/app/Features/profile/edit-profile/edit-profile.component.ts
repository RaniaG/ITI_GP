import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  constructor(private user: UserService) { }
  editProfileForm: FormGroup;
  validator: ValidatorFn;
  ngOnInit() {
    this.editProfileForm = new FormGroup({
      'firstname': new FormControl(this.user.getById(1).firstname, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'lastname': new FormControl(this.user.getById(1).lastname, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'username': new FormControl(this.user.getById(1).username, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'email': new FormControl(this.user.getById(1).email, [Validators.required, Validators.email]),
      'bio': new FormControl(this.user.getById(1).bio),
      'changePassword': new FormControl(''),
      // 'confirmPassword': new FormControl('', this.MustMatch('changePassword', 'confirmPassword'))
      confirmPassword: new FormControl()
    });
  }

  // MustMatch(control1: string, control2: string): ValidatorFn {
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

  onSubmit(editProfileForm) {
    console.log(editProfileForm);
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
