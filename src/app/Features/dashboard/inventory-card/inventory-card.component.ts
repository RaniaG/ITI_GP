import { Component, OnInit } from '@angular/core';

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
  constructor() {
    this.inventorySlotsMaxLimit = 100;
    this.usedSlots = 25;
    this.premiumStorage = false;
  }

  ngOnInit() {
    this.usagePercentage = (this.usedSlots / this.inventorySlotsMaxLimit) * 100;
  }

}
