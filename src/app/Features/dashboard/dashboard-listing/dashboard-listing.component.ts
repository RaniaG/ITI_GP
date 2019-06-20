import { Component, OnInit } from '@angular/core';

const assetsPath = '../../../../assets/images/png-dashboard';

@Component({
  selector: 'app-dashboard-listing',
  templateUrl: './dashboard-listing.component.html',
  styleUrls: ['./dashboard-listing.component.scss']
})
export class DashboardListingComponent implements OnInit {
  visitsImage: string;
  productsImage: string;
  ordersImage: string;
  revenuImage: string;

  visitsValue: number;
  productsValue: number;
  ordersValue: number;
  revenuValue: number;

  constructor() {
    this.visitsImage = `${assetsPath}/015-search.png`;
    this.productsImage = `${assetsPath}/008-cart.png`;
    this.ordersImage = `${assetsPath}/002-order-1.png`;
    this.revenuImage = `${assetsPath}/005-profit.png`;

    this.visitsValue = 1000;
    this.productsValue = 1000;
    this.ordersValue = 1000;
    this.revenuValue = 1000;
  }

  ngOnInit() {
  }

}
