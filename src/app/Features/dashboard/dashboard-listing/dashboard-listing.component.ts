import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';
import { ActivatedRoute, Params } from '@angular/router';

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
  shopId: string;

  constructor(private sellerService: SellerService, private activatedRoute: ActivatedRoute) {
    this.visitsImage = `${assetsPath}/015-search.png`;
    this.productsImage = `${assetsPath}/008-cart.png`;
    this.ordersImage = `${assetsPath}/002-order-1.png`;
    this.revenuImage = `${assetsPath}/005-profit.png`;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.shopId = params["id"];
      }
    );
    this.visitsValue = this.sellerService.getShopVisitsCount();
    this.productsValue = this.sellerService.getSoldProductCount();
    this.sellerService.getDoneOredersCount(this.shopId).subscribe(
      res => {
        this.ordersValue = res;
      }
    );
    this.sellerService.getTotalRevenu(this.shopId).subscribe(
      (res) => {
        this.revenuValue = res;
      }
    );
  }

}
