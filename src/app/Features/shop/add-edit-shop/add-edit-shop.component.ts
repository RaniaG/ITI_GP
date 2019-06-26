import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Shop } from 'src/app/_models/shop';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { validators } from 'src/app/_utilities/validators';
import { ShopService } from '../shop.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from 'src/app/can-deactivate-guard.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from 'src/app/Shared/confirm/confirm.component';
import { CountryCityService } from 'src/app/_service/country-city.service';
import { City, District, Country } from 'src/app/_models/country-city';

@Component({
  selector: 'app-add-edit-shop',
  templateUrl: './add-edit-shop.component.html',
  styleUrls: ['./add-edit-shop.component.scss'],
  providers: []
})
export class AddEditShopComponent implements OnInit, CanComponentDeactivate {

  shop: Shop = { name: "" };
  title: string = 'Create Shop';
  shopForm: FormGroup;
  validName: boolean;
  edit: boolean = false;
  saved: boolean = true;
  checkingAvailability: boolean = false;
  doneLoading: boolean = false;
  cities: City[] = [];
  districts: District[] = [];
  countries: Country[] = [];
  step: number = 1;
  deliveryAddressesForm: FormGroup;
  deliveryAddresses: { districtId: number, cityId: number, countryId: number, shopId: string }[] = [];
  savedDeliveryAddress: boolean = true;
  showDeliveryAddressForm: boolean = false;
  @ViewChild('nameControl') name: ElementRef
  constructor(private fb: FormBuilder, private shopService: ShopService,
    private router: Router, private route: ActivatedRoute, private modalService: NgbModal,
    private countryCityService: CountryCityService) {
    this.validName = true;
    this.generateReactiveForm();
    this.countryCityService.isLoaded.subscribe((x) => {
      this.countries = this.countryCityService.getAllCountries();
      this.cities = this.countryCityService.getCitiesByCountryId(this.countries[0].id);
      this.districts = this.countryCityService.getDistrictsByCityId(this.cities[0].id);
      this.doneLoading = true;
      this.shopForm.patchValue({ countryId: this.countries[0].id, cityId: this.cities[0].id, districtId: this.districts[0].id })
      this.deliveryAddressesForm = new FormGroup({
        countryId: new FormControl(this.countries[0].id),
        cityId: new FormControl(this.cities[0].id),
        districtId: new FormControl(this.districts[0].id)
      });
    })
    this.countryCityService.getAll();
  }

  ngOnInit() {
    var id = this.route.snapshot.params.id;
    if (id) {
      this.title = 'Edit Shop';
      this.doneLoading = false;
      this.shopService.getById(id).subscribe((response: Shop) => {
        this.shop = response;
        console.log(this.shop);
        this.fillEditForm();
        this.doneLoading = true;
      }, (error) => {
        this.doneLoading = true;
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
      countryId: [1, Validators.required],
      cityId: [1, Validators.required],
      districtId: [1, Validators.required],
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
    this.doneLoading = false;
    let id = this.route.snapshot.params.id;
    if (id)//edit
    {
      this.shopService.edit(this.shopForm.value).subscribe(res => {
        this.doneLoading = true;
        this.saved = true;
        this.router.navigate(['/shop', this.shop.id]);
      }, err => {
        this.doneLoading = true;
      })
    }
    else {
      this.shopService.add(this.shopForm.value).subscribe(res => {
        debugger;
        this.doneLoading = true;
        this.shop.id = res['id'];
        this.step++;
      }, err => {
        this.doneLoading = true;
        debugger;
      });
    }
  }
  cancel() {
    const modalRef = this.prompt();
    modalRef.result.then((res) => {
      // console.log(res);
      this.router.navigate(['/profile']);//to make it a relative path to the current route
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
  countrySelect(value) {
    debugger;
    this.cities = this.countryCityService.getCitiesByCountryId(+value);
    this.districts = this.countryCityService.getDistrictsByCityId(this.cities[0].id);
    this.shopForm.patchValue({
      districtId: this.districts.length > 0 ? this.districts[0].id : 0
      , cityId: this.cities.length > 0 ? this.cities[0].id : 0
    });

  }
  citySelect(value) {
    debugger;
    this.districts = this.countryCityService.getDistrictsByCityId(+value);
    this.shopForm.patchValue({ districtId: this.districts.length > 0 ? this.districts[0].id : 0 });
  }

  saveDeliveryAddress() {

    let da = this.deliveryAddressesForm.getRawValue();
    da.districtId = +da.districtId;
    da.cityId = +da.cityId;
    da.countryId = +da.countryId;
    //check if already exists
    let x = this.deliveryAddresses.find(el => el.cityId == da.cityId && el.countryId == da.countryId && el.districtId == da.districtId);
    if (x)
      return;
    da.shopId = this.shop.id;
    this.deliveryAddresses.push(da);
    this.savedDeliveryAddress = true;
    this.showDeliveryAddressForm = false;
  }
  addDeliveryAddress() {
    this.savedDeliveryAddress = false;
    this.showDeliveryAddressForm = true;
  }
  daCountryChange(value) {
    debugger;
    this.cities = this.countryCityService.getCitiesByCountryId(+value);
    this.districts = this.countryCityService.getDistrictsByCityId(this.cities[0].id);
    this.deliveryAddressesForm.patchValue({
      districtId: this.districts.length > 0 ? this.districts[0].id : 0
      , cityId: this.cities.length > 0 ? this.cities[0].id : 0
    });
  }
  daCityChange(value) {
    debugger;
    this.districts = this.countryCityService.getDistrictsByCityId(+value);
    this.deliveryAddressesForm.patchValue({ districtId: this.districts.length > 0 ? this.districts[0].id : 0 });
  }
  finalize() {
    this.shopService.deliveryAddresses(this.deliveryAddresses).subscribe(res => {
      debugger;
      this.saved = true;
      this.router.navigate(['/shop', this.shop.id]);
    }, err => {
      debugger;
      console.log(err)
    });
  }
}
