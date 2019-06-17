import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  product: Product;
  reviews: Review[];
  activeImageIndex: number;
  numberOfAddedItems: number;
  customizations;
  relatedProducts: Product[];
  constructor(private route: ActivatedRoute, private productService: ProductService, private reviewService: ReviewService) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.product = this.productService.getById(id);
      this.activeImageIndex = 0;
      this.numberOfAddedItems = 0;
      this.customizations = {};
      this.relatedProducts = this.productService.getRelated(id);
    });
  }

  finalPrice(): number {
    let result;
    if (this.product.discount != null)
      result = this.product.price - this.product.discount;
    else
      result = this.product.price;
    return result;
  }

  addCustomization(customization: { field: string, value: string }) {
    this.customizations[customization.field] = customization.value;
  }
  addToCart() {
    //add to cart service
  }
}

