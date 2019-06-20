import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';

@Component({
  selector: 'app-visits-summary',
  templateUrl: './visits-summary.component.html',
  styleUrls: ['./visits-summary.component.scss']
})
export class VisitsSummaryComponent implements OnInit {

  // shopTotalVisits:number;
  shopVisits: { region: string, numberOfVisits: number }[];
  //to inject service later
  constructor(private sellerService: SellerService) {

  }

  ngOnInit() {
    // this.shopTotalVisits = 500;
    this.shopVisits = this.sellerService.getShopVisitsDetails();
  }

}
