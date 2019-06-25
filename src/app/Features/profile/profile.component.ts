import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_service/user.service';
import { ShopService } from '../shop/shop.service';
import { Shop } from 'src/app/_models/shop';
import { ProductService } from 'src/app/_service/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string;
  bio: string;
  shops: Shop[];
  products: Product[];
  // imgURL: any = this.user.getById(1).photo;

  constructor(private user: UserService, private shopService: ShopService, private productService: ProductService) { }

  ngOnInit() {
    // this.username = this.user.getById(1).username;
    // this.bio = this.user.getById(1).bio;
    // this.shops = this.shopService.getAll();
    this.products = this.productService.getAll();
  }


}
