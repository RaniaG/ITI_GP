import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'src/app/_models/shop';
import { ShopService } from '../shop.service';
import { UserService } from 'src/app/_service/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent implements OnInit {

  @Input() shop: Shop;
  user: User;
  constructor(private shopService: ShopService, private userService: UserService) { }

  ngOnInit() {
    // this.user = this.userService.getById(this.shop.id);
  }

  follow() {
    this.shopService.followShop(this.shop.id);
  }
}
