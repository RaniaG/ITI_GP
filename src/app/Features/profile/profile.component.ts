import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { ShopService } from '../shop/shop.service';
import { Shop } from 'src/app/_models/shop';
import { ProductService } from 'src/app/_service/product.service';
import { Product } from 'src/app/_models/product';
import { AuthService } from 'src/app/_auth/auth.service';
import { FavitemsService } from 'src/app/favitems.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: any;
  bio: string;
  // shops: Shop[];
  shops: any;
  products: Product[];
 imgURL: any = "http://www.iconarchive.com/download/i63426/dapino/beauty-consultant/girl-beauty-consultant-showing.ico";

  constructor(private user: UserService, private FavitemsService: FavitemsService,private shopService: ShopService, private productService: ProductService, private authService: AuthService) { }

  ngOnInit() {

    //this.bio = this.authService.currentUser.bio;
    // this.shops = this.shopService.getFollowedShops().subscribe((response: Shop) => {
    //   this.shops = response;
    //   console.log(this.shops);
    // }, (error) => {
    //   console.log(error);
    // })
    this.shops = this.FavitemsService.getAll();


    this.username=this.authService.currentUser.userName;

    this.products = this.productService.getAll();
  }


}
