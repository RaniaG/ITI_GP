import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.scss']
})
export class SalesSummaryComponent implements OnInit {

  salesSummary: { period: string, orderedProductsSales: number, numberOfUnits: number }[];
  // to inject order service later
  constructor(private sellerService: SellerService) { }

  ngOnInit() {
    this.salesSummary = this.sellerService.getSalesOverPeriods();
  }

}
