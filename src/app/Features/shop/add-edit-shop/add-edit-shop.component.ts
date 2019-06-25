import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Shop } from 'src/app/_models/shop';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validators } from 'src/app/_utilities/validators';
import { ShopService } from '../shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/can-deactivate-guard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from 'src/app/Shared/confirm/confirm.component';

@Component({
  selector: 'app-add-edit-shop',
  templateUrl: './add-edit-shop.component.html',
  styleUrls: ['./add-edit-shop.component.scss'],
  providers: []
})
export class AddEditShopComponent implements OnInit, CanComponentDeactivate {

  shop: Shop;
  shopForm: FormGroup;
  validName: boolean;
  edit: boolean = false;
  saved: boolean = true;
  checkingAvailability: boolean = false;
  @ViewChild('nameControl') name: ElementRef
  constructor(private fb: FormBuilder, private shopService: ShopService,
    private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
    this.generateReactiveForm();
    this.validName = true;
  }

  ngOnInit() {
    var id = this.route.snapshot.params.id;
    if (id) {
      this.shopService.getById(id).subscribe((response: Shop) => {

        this.shop = response;
        console.log(this.shop);
        this.fillEditForm();
      }, (error) => {
        console.log(error);
      })
    }
  }

  generateReactiveForm() {

    this.shopForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/)]],
      about: ['', Validators.required],
      policy: [''],

      street: ['', Validators.required,],
      countryId: ['1', Validators.required],
      cityId: ['1', Validators.required],
      districtId: ['1', Validators.required],
      postalcode: [null, validators.number]

    })
  }

  fillEditForm() {
    console.log(this.shop.countryId);
    this.shopForm.patchValue({
      name: this.shop.name,
      about: this.shop.about,
      policy: this.shop.policy,
      street: this.shop.street,
      countryId: this.shop.countryId,
      cityId: this.shop.cityId,
      districtId: this.shop.districtId,
      postalcode: this.shop.postalcode
    });
    console.log(this.shopForm);
  }
  checkAvailability() {
    debugger;
    this.checkingAvailability = true;
    let validationObservable;
    if (this.shop)
      validationObservable = this.shopService.validateShopName(this.shopForm.get('name').value, this.shop.id)
    else
      validationObservable = this.shopService.validateShopName(this.shopForm.get('name').value)
    validationObservable.subscribe((Response) => {
      this.checkingAvailability = false;
      (this.name.nativeElement as HTMLElement).classList.add("is-valid");
      this.validName = true;
    }, (error) => {
      this.checkingAvailability = false;
      (this.name.nativeElement as HTMLElement).classList.add("is-invalid");
      this.validName = false;
    });

  }
  finish() {
    this.shopService.add(this.shopForm.value);
  }
  cancel() {
    const modalRef = this.prompt();
    modalRef.result.then((res) => {
      console.log(res);
      // this.router.navigate(['profile'], { relativeTo: this.route });//to make it a relative path to the current route
    }).catch((err) => {
      console.log(err);
    })
    //navigate to previous
  }
  prompt() {
    const modalRef = this.modalService.open(ConfirmComponent);
    modalRef.componentInstance.message = 'You have unsaved data.\nAre you sure you want to cancel?';
    return modalRef;
  }
  canDeactivate() {
    return this.saved || this.prompt().result;
  }
  clearNameClass() {
    (this.name.nativeElement as HTMLElement).classList.remove("is-valid");
    (this.name.nativeElement as HTMLElement).classList.remove("is-invalid");
    this.validName = false;
  }
}
