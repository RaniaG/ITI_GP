import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../shop/shop.service';

@Component({
  selector: 'app-inventory-card',
  templateUrl: './inventory-card.component.html',
  styleUrls: ['./inventory-card.component.scss']
})
export class InventoryCardComponent implements OnInit {
  inventorySlotsMaxLimit: number;
  usedSlots: number;
  usagePercentage: number;
  premiumStorage: Boolean;

  // to include service later
  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.premiumStorage = this.shopService.isShopPremium();
    this.inventorySlotsMaxLimit = this.shopService.getInventoryLimit();
    this.usedSlots = this.shopService.getInventoryUsedSlots();
    this.usagePercentage = (this.usedSlots / this.inventorySlotsMaxLimit) * 100;
  }

}
