import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];

  product :Product;
  ShowDeleteProductModal :boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    if( !this.products)
      this.products = this.productService.getAll();
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
