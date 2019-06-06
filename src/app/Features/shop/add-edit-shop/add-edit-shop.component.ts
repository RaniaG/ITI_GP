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
  @ViewChild('nameControl') name: ElementRef
  constructor(private fb: FormBuilder, private shopService: ShopService,
    private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
    this.generateReactiveForm();
    this.validName = true;
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
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
    (this.name.nativeElement as HTMLElement).classList.add('is-valid');
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

}
