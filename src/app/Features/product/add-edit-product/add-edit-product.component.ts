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
  constructor(private productService :ProductService ,private categoryService :CategoryService , private router :Router, private route: ActivatedRoute) { 
    if(!this.categories)
     { this.categories = this.categoryService.getAll(); }
  }

  ngOnInit() {
    
    // const id = this.route.snapshot.params['id'];

    this.addProductForm = new FormGroup({

      'productImages' :new FormArray([],Validators.required),
      'productName' :new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z]+(?:[_-][A-Za-z]+)*$/)]),
      'productDescription' :new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
      'productQuantity' :new FormControl('',[Validators.required, Validators.min(1), Validators.max(20)]),
      'productPrice' :new FormControl('',[Validators.required, validators.number]),
      'productDiscount' :new FormControl({value:"", disabled: true},[Validators.required, validators.number]),
      'productCategory' :new FormControl('',Validators.required),

   
    });

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
      this.productService.addProduct(this.product);
    }
    console.log(this.product);
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

