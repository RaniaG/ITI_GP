import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Shop } from 'src/app/_models/shop';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_service/product.service';
import { debug } from 'util';
import { AuthService } from 'src/app/_auth/auth.service';


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
  doneLoading: boolean = false;
  followedByUser: boolean = false;
  constructor(private shopService: ShopService, private route: ActivatedRoute, private authService: AuthService, private productService: ProductService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.shopProducts = this.productService.getAllProducts(this.id);
    this.shop = this.shopService.getById(this.id);
    this.followedByUser = this.shop.followers && this.shop.followers.find(el => el.id == this.authService.currentUser.id) ? true : false;
    this.doneLoading = true;
    // this.shopService.getById(id).subscribe(res => {
    //   debugger;
    //   this.shop = res as Shop;

    //   this.followedByUser = this.shop.followers && this.shop.followers.find(el => el.id == this.authService.currentUser.id) ? true : false;
    //   this.doneLoading = true;
    //   console.log(this.shop);
    // }, err => {
    //   this.doneLoading = true;
    //   debugger;
    // });
    // this.relatedProducts = this.shopService.getRelatedProducts();
    // get shop's products from product service
  }


  handleCoverPhoto(action: string) {
    this.showCoverUploadModal = false;
    switch (action) {
      case 'Save':
        // this.shopService.changeShopCover(this.coverPhoto);
        let reader = new FileReader();
        reader.readAsDataURL(this.coverPhoto);
        let self = this;
        reader.onload = function () {
          debugger;
          self.shop.cover = reader.result as string;
        };
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
        // this.shopService.changeShopPhoto(this.shopPhoto);
        this.shop.photo = this.shopPhoto;
        break;
      case 'Close':
      case 'Cancel':
      default:
        this.shopPhoto = null;
        break;
    }
  }

}
