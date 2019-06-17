import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';

@Component({
  selector: 'app-orders-summary',
  templateUrl: './orders-summary.component.html',
  styleUrls: ['./orders-summary.component.scss']
})
export class OrdersSummaryComponent implements OnInit {
  ordersSummary;
  //to inject order service later
  constructor(private sellerService: SellerService) {
  }

  ngOnInit() {
    this.ordersSummary = this.sellerService.getOrdersSummary();
  }

}
