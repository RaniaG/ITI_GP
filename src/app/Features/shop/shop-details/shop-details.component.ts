import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  rate: number
  constructor() {
    this.rate = 3.6;
  }

  ngOnInit() {
  }

  onRateChange(val) {
    this.rate = val;
  }
}
