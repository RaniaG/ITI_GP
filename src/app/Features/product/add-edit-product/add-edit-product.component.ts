import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl } from '@angular/forms';
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
  productImages: AbstractControl[] ;
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
      this.productImages = this.convertArrayElmentsToFormControl(this.product.images)
    }


    this.addProductForm = new FormGroup({
      // this.editMode ? this.productImages :
      'images' :new FormArray(this.editMode ? this.productImages :[] ,Validators.required),
      'name' :new FormControl(this.editMode ? this.product.name :'',[Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern(/^[A-Za-z ]+(?:[_-][A-Za-z ]+)*$/)]),
      'description' :new FormControl(this.editMode ? this.product.description :'',[Validators.required, Validators.minLength(10)]),
      'quantity' :new FormControl(this.editMode ? this.product.quantity : '',[Validators.required, Validators.min(1), Validators.max(20)]),
      'price' :new FormControl(this.editMode ? this.product.price : '',[Validators.required, validators.number]),
      'discount' :new FormControl({value:this.editMode ? this.product.discount :'', disabled: true},[Validators.required, validators.number]),
      'category' :new FormControl(this.editMode ? this.product.category.id:'',Validators.required),
    });
    
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
      // console.log(this.product)
    // this.router.navigate(['/products'])
  }

  handleProductPhoto(action: string){
    this.showProductUploadModal = false;
    switch (action) {
      case 'OK':
        const p = this.addProductForm.get('images') as FormArray;
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

  convertArrayElmentsToFormControl(imagesArray :string[]) :AbstractControl[] {
    let imagesFormArray : AbstractControl[] = [];
    for (let index = 0; index < imagesArray.length; index++) {
      let element = imagesArray[index];
      imagesFormArray.push(new FormControl(element));
    }
    return imagesFormArray;
  }
}

