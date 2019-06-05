import { Component, OnInit, Input } from '@angular/core';
import { ReviewService } from 'src/app/_service/review.service';
import { Review } from 'src/app/_models/review';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input('Product') product :Product;
  reviews :Review[];
  constructor(private productService :ProductService, private reviewService :ReviewService) { 

    this.product = this.productService.getById(3); 
  }

  ngOnInit() {
    if(!this.reviews)
    { this.reviews = this.reviewService.getAll(); }
  }

  finalPrice() :number
  {
    let result;
    if(this.product.discount != null)
      result = this.product.price - this.product.discount;
    else
      result = this.product.price;
    return result;
  }
}
  
