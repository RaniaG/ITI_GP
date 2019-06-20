import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';
import { CategoryService } from 'src/app/_service/category.service';
import { Category } from 'src/app/_models/category';
import { Router } from "@angular/router";


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
  constructor(private productService :ProductService ,private categoryService :CategoryService , private router :Router) { 

    if(!this.categories)
     { this.categories = this.categoryService.getAll(); }

    this.addProductForm = new FormGroup({
      'productMainImage' :new FormControl(),
      'productImages' :new FormArray([]),
      'productName' :new FormControl(),
      'productDescription' :new FormControl(),
      'productQuantity' :new FormControl(),
      'productPrice' :new FormControl(),
      'productDiscount' :new FormControl(),
      'productCategory' :new FormControl()
    });
   
  }

  ngOnInit() {
  }

  onSubmit(){
    this.product = this.addProductForm.value as Product;
    this.productService.addProduct(this.product);
    this.router.navigate(['/products'])
  }

  handleProductPhoto(action: string){
    this.showProductUploadModal = false;
    switch (action) {
      case 'OK':
        // if(this.addProductForm.get('productMainImage') == null)
        //   this.addProductForm.get('productMainImage') as FormControl = this.productPhoto;
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
  SaveProductPhoto(action: string){

  }
}
