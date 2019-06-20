import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/_service/user.service';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @ViewChild('profileimg')profileimg:ElementRef;
  constructor(private user: UserService) { }
  editProfileForm: FormGroup;
  validator: ValidatorFn;

  public imagePath;
  imgURL: any;
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
      this.imgURL = reader.result;
    }
  }
  ngOnInit() {
    this.editProfileForm = new FormGroup({
      'firstname': new FormControl(this.user.getById(1).firstname, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'lastname': new FormControl(this.user.getById(1).lastname, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'username': new FormControl(this.user.getById(1).username, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]),
      'email': new FormControl(this.user.getById(1).email, [Validators.required, Validators.email]),
      'bio': new FormControl(this.user.getById(1).bio),
      'photo': new FormControl(this.user.getById(1).photo),
      'changePassword': new FormControl(''),
      'confirmPassword': new FormControl('', this.MustMatch('changePassword', 'confirmPassword'))
      // confirmPassword: new FormControl()
    });
  }


  onSubmit(editProfileForm) {
    console.log(editProfileForm);
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
