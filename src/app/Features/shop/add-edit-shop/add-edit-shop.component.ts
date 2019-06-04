import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Shop } from 'src/app/_models/shop';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validators } from 'src/app/_utilities/validators';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-add-edit-shop',
  templateUrl: './add-edit-shop.component.html',
  styleUrls: ['./add-edit-shop.component.scss']
})
export class AddEditShopComponent implements OnInit {

  shop: Shop;
  shopForm: FormGroup;
  validName: boolean;
  @ViewChild('nameControl') name: ElementRef
  constructor(private fb: FormBuilder, private shopService: ShopService) {
    this.generateReactiveForm();
    this.validName = true;
  }

  ngOnInit() {

  }

  generateReactiveForm() {
    // this.shopForm = new FormGroup({
    //   name: new FormControl(),
    //   about: new FormControl(),
    //   policies: new FormControl(),
    //   address: new FormGroup({
    //     street: new FormControl(),
    //     country: new FormControl(),
    //     city: new FormControl(),
    //     district: new FormControl(),
    //     postalcode: new FormControl()
    //   })
    // });
    this.shopForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/)]],
      about: ['', Validators.required],
      policies: [''],
      address: this.fb.group({
        street: ['', Validators.required,],
        country: ['1', Validators.required],
        city: ['1', Validators.required],
        district: ['1', Validators.required],
        postalcode: [null, validators.number]
      })
    })
  }
  checkAvailability() {
    this.validName = this.shopService.validateShopName(this.shopForm.get('name').value);
    // console.log(this.name);
    (this.name.nativeElement as HTMLElement).classList.add('is-valid');
  }
  finish() {
    this.shopService.add(this.shopForm.value);
  }
  cancel() {
    //navigate to previous

  }
}
