import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Shop } from 'src/app/_models/shop';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';


@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  showPhotoUploadModal: boolean = false;
  showCoverUploadModal: boolean = false;
  id: string;
  coverPhoto = null;
  shopPhoto = null;
  shop: Shop;
  shopProducts: Product[];
  relatedProducts: Product[];
  constructor(private shopService: ShopService, private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.shopProducts = this.productService.getAllProducts(this.id);
    // this.shop = this.shopService.getById(id);
    // this.relatedProducts = this.shopService.getRelatedProducts();
    //get shop's products from product service
  }


  handleCoverPhoto(action: string) {
    this.showCoverUploadModal = false;
    switch (action) {
      case 'Save':
        this.shopService.changeShopCover(this.coverPhoto);
        break;
      case 'Close':
      case 'Cancel':
      default:
        this.coverPhoto = null;
        break;
    }
  }
  handleShopPhoto(action: string) {
    this.showPhotoUploadModal = false;
    switch (action) {
      case 'Save':
        this.shopService.changeShopPhoto(this.shopPhoto);
        break;
      case 'Close':
      case 'Cancel':
      default:
        this.shopPhoto = null;
        break;
    }
  }
}
