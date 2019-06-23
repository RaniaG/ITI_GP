import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';
import { CategoryService } from 'src/app/_service/category.service';
import { Category } from 'src/app/_models/category';
import { Router, ActivatedRoute } from "@angular/router";
import { validators } from "../../../_utilities/validators";

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

  product :Product;
  categories :Category[];
  addProductForm :FormGroup;
  showProductUploadModal :boolean = false;
  productPhoto = null;
  productOnSale = new FormControl('notSale');

  editMode: boolean = false;

  constructor(private productService :ProductService ,private categoryService :CategoryService , private router :Router, private route: ActivatedRoute) { 
    if(!this.categories)
     { this.categories = this.categoryService.getAll(); }
  }

  ngOnInit() {
  
    const id = +this.route.snapshot.params['id'];
    if(id)
    {
      this.editMode = true;
      this.product = this.productService.getById(id);
    }
    this.addProductForm = new FormGroup({
      // this.editMode ? this.product.images :
      'productImages' :new FormArray([] ,Validators.required),
      'productName' :new FormControl(this.editMode ? this.product.name :'',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+(?:[_-][A-Za-z]+)*$/)]),
      'productDescription' :new FormControl(this.editMode ? this.product.description :'',[Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
      'productQuantity' :new FormControl(this.editMode ? this.product.quantity : '',[Validators.required, Validators.min(1), Validators.max(20)]),
      'productPrice' :new FormControl(this.editMode ? this.product.price : '',[Validators.required, validators.number]),
      'productDiscount' :new FormControl({value:this.editMode ? this.product.discount :'', disabled: true},[Validators.required, validators.number]),
      'productCategory' :new FormControl(this.editMode ? this.product.category.name:'',Validators.required),
    });

    // console.log(this.product.category.name)
    if(this.editMode && this.product.discount)
      this.productOnSale.setValue('sale');

    this.productOnSale.valueChanges.subscribe((value) => {
      if(value == 'sale')
      this.addProductForm.get('productDiscount').enable();
      else
      {
        this.addProductForm.get('productDiscount').disable();
        this.addProductForm.get('productDiscount').setValue('');
      }
    })
  }

  onSubmit(){
    if(this.addProductForm.valid)
    {
      this.product = this.addProductForm.value as Product;
      if(!this.editMode)
        this.productService.addProduct(this.product);
      else
        this.productService.updateProduct(this.product);
 
      this.addProductForm.reset();
    }
    // console.log(this.product);
    // this.router.navigate(['/products'])
  }

  handleProductPhoto(action: string){
    this.showProductUploadModal = false;
    switch (action) {
      case 'OK':
        const p = this.addProductForm.get('productImages') as FormArray;
        if(this.productPhoto != null)
        { 
          if(p.length < 5)
            p.push(new FormControl(this.productPhoto));
        }
        break;
      case 'Close':
      case 'Cancel':
      default:
        // this.productPhoto = null;
        break;
    }
  }
}

