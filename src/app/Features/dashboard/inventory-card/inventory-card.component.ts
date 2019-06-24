import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop/shop.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.scss']
})
export class InventoryCardComponent implements OnInit {
  inventoryInfo: { maxSlots: number, usedSlots: number };
  usagePercentage: number;
  premiumStorage: Boolean;
  shopId: string;
  // to include service later
  constructor(private shopService: ShopService, private activatedRoute: ActivatedRoute) {
    this.premiumStorage = false;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.shopId = params['id'];
      }
    );
    // we need a resolver before anyth check if shopid (shop) exists
    this.shopService.getShopSubscription(this.shopId).subscribe(
      (res) => {
        this.premiumStorage = (res == "free") ? false : true;
      }
    )
    this.shopService.getInventoryInfo(this.shopId).subscribe(
      (res) => {
        this.inventoryInfo = { ...res };
      }

    );

    this.usagePercentage = (this.inventoryInfo.usedSlots / this.inventoryInfo.maxSlots) * 100;
  }

}
