import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';

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

  constructor(private sellerService: SellerService) {
    this.visitsImage = `${assetsPath}/015-search.png`;
    this.productsImage = `${assetsPath}/008-cart.png`;
    this.ordersImage = `${assetsPath}/002-order-1.png`;
    this.revenuImage = `${assetsPath}/005-profit.png`;
  }

  ngOnInit() {
    this.visitsValue = this.sellerService.getShopVisitsCount();
    this.productsValue = this.sellerService.getSoldProductCount();
    this.ordersValue = this.sellerService.getDoneOredersCount();
    this.revenuValue = this.sellerService.getTotalRevenu();
  }

}
