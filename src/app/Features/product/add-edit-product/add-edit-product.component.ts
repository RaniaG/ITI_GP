import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';
import { CategoryService } from 'src/app/_service/category.service';
import { Category } from 'src/app/_models/category';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

  product: Product;
  categories: Category[];
  addProductForm: FormGroup;
  addVariation: FormGroup;
  showProductUploadModal: boolean = false;
  showProductVariationModal: boolean = false;

  productPhoto = null;
  productOnSale = new FormControl('notSale');

  editMode: boolean = false;
  productImages: AbstractControl[];

  variation: { key: string, val: string[] }[] = [];
  enterValue: boolean[] = [];
  // showTextBox: boolean = false;

  variationKey: FormControl = new FormControl('');
  variationValue: FormControl = new FormControl(['']);

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router, private route: ActivatedRoute) {
    if (!this.categories)
     { this.categories = this.categoryService.getAll(); }
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    if (id) {
      this.editMode = true;
      this.product = this.productService.getById(id);
      this.productImages = this.convertArrayElmentsToFormControl(this.product.images)
    }

    this.addProductForm = new FormGroup({
      'images': new FormArray(this.editMode ? this.productImages : [], Validators.required),
      'name': new FormControl(this.editMode ? this.product.name : '', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z ]+(?:[_-][A-Za-z ]+)*$/)]),
      'description': new FormControl(this.editMode ? this.product.description : '', [Validators.required, Validators.minLength(10)]),
      'quantity': new FormControl(this.editMode ? this.product.quantity : '', [Validators.required, Validators.min(1), Validators.max(20)]),
      'price': new FormControl(this.editMode ? this.product.price : '', [Validators.required, Validators.pattern('^[0-9]+$')]),
      'discount': new FormControl({ value: this.editMode ? this.product.discount : '', disabled: true }, [Validators.required, Validators.pattern('^[0-9]+$')]),
      'category': new FormControl(this.editMode ? this.product.category.id : '', Validators.required),
      // 'variation': new FormGroup({
      //   'variationKey' : new FormControl(''),
      //   'variationValue': new FormControl([''])
      // }),

    });

    if (this.editMode && this.product.discount) {
      this.productOnSale.setValue('sale');
      this.addProductForm.get('discount').enable();
    }

    this.productOnSale.valueChanges.subscribe((value) => {
      if (value == 'sale')
        this.addProductForm.get('discount').enable();
      else {
        this.addProductForm.get('discount').disable();
        this.addProductForm.get('discount').setValue('');
      }
    })
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      this.product = this.addProductForm.value as Product;
      if (!this.editMode)
        this.productService.addProduct(this.product);
      else
        this.productService.updateProduct(this.product);

      this.addProductForm.reset();
    }
    console.log(this.product)
    this.router.navigate(['/products'])
  }
 

  handleProductPhoto(action: string) {
    this.showProductUploadModal = false;
    switch (action) {
      case 'OK':
        const p = this.addProductForm.get('images') as FormArray;
        if (this.productPhoto != null) {
          if (p.length < 5)
            p.push(new FormControl(this.productPhoto));
        }
        break;
      case 'Close':
      case 'Cancel':
      default:
        this.router.navigate(['/products'])
        break;
    }
  }

  convertArrayElmentsToFormControl(imagesArray: string[]): AbstractControl[] {
    let imagesFormArray: AbstractControl[] = [];
    for (let index = 0; index < imagesArray.length; index++) {
      let item = imagesArray[index];
      imagesFormArray.push(new FormControl(item));
    }
    return imagesFormArray;
  }
  showVariationModel(action: string) {
    this.showProductVariationModal = false;
    switch (action) {
      case 'OK':
        break;
      case 'Close':
      case 'Cancel':
      default:
        break;
    }
  }
  addTextbox() {
    // this.showTextBox = true;
    if (this.variation.length == 0 || this.enterValue[this.enterValue.length - 1]) {
      this.enterValue.push(false);
      // console.log(this.enterValue)
      this.variation.push({ key: "", val: [] })
      // console.log(this.variation)
    }
  }
  getTextBoxKey(event, i) {
    this.variation[i].key = event.target.value;
    // this.variation[i].val = [""];
    this.enterValue[i] = true;
    this.variationKey.setValue('');
  }
  getTextBoxValue(event, i) {
    this.variation[i].val.push(event.target.value);
    // console.log(this.variation)
    this.variationValue.setValue('')
  }
}
