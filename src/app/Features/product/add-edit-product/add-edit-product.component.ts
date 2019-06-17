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

  constructor(private productService :ProductService ,private categoryService :CategoryService , private router :Router) { 

    if(!this.categories)
     { this.categories = this.categoryService.getAll(); }

    this.addProductForm = new FormGroup({
      'productImages' :new FormArray([
        new FormControl(),
        new FormControl(),
        new FormControl(),
        new FormControl(),
        new FormControl(),
      ]),
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
    console.log(this.addProductForm.value);
    console.log(this.product);
    this.router.navigate(['/products'])
  }
}
