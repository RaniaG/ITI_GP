import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/_service/category.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  product :Product;
  categories: Category[];
  activeCategoryIndex: number;
  // rate: number[] = [];
  ShowDeleteProductModal :boolean = false;
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.activeCategoryIndex = 0;
    if( !this.products)
      this.products = this.productService.getAll();
    if(!this.categories)
      this.categories = this.categoryService.getAll();
      // console.log(this.products)
  }

  openModal(id: number){
    this.ShowDeleteProductModal = true;
    this.product = this.productService.getById(id);
  }
  deleteProduct(action :string){
    this.ShowDeleteProductModal = false;
    switch (action) {
      case 'OK':
        this.productService.deleteProduct(this.product.id)
      case 'Close':
      case 'Cancel':
      default:
        // this.productPhoto = null;
        break;
    }
  }
}
