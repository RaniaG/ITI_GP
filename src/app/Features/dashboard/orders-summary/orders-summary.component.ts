import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';

@Component({
  selector: 'app-orders-summary',
  templateUrl: './orders-summary.component.html',
  styleUrls: ['./orders-summary.component.scss']
})
export class OrdersSummaryComponent implements OnInit {
  ordersSummary;
  shopId: string;
  //to inject order service later
  constructor(private sellerService: SellerService) {
    this.shopId = "123";
  }

  ngOnInit() {
    this.ordersSummary = this.sellerService.getOrdersSummary();
  }

}
