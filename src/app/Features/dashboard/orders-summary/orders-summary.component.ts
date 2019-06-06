import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-summary',
  templateUrl: './orders-summary.component.html',
  styleUrls: ['./orders-summary.component.scss']
})
export class OrdersSummaryComponent implements OnInit {
  ordersSummary: orderSummary[];
  //to inject service later
  constructor() {
  }

  ngOnInit() {
    this.ordersSummary = [
      { statusName: "pending", ordersCount: 10 },
      { statusName: "shipped", ordersCount: 10 },
      { statusName: "delivered", ordersCount: 10 },
      { statusName: "custom request", ordersCount: 3 },
      { statusName: "return request", ordersCount: 1 },
    ]
  }

}
