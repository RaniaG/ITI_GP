import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-summary',
  templateUrl: './sales-summary.component.html',
  styleUrls: ['./sales-summary.component.scss']
})
export class SalesSummaryComponent implements OnInit {
  salesSummary;
  // to inject service later
  constructor() { }

  ngOnInit() {
    this.salesSummary = [
      { period: "today", orderedProductsSales: 750, numberOfUnits: 4 },
      { period: "15 days", orderedProductsSales: 750, numberOfUnits: 4 },
      { period: "1 month", orderedProductsSales: 750, numberOfUnits: 4 },
      { period: "3 months", orderedProductsSales: 750, numberOfUnits: 4 },
    ]
  }

}
