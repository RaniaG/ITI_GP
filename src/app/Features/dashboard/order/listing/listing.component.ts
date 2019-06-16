import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/_models/order';

@Component({
  selector: 'app-order-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class OrderListingComponent implements OnInit {
  elementsPerPage: number;
  totalElements: number;
  pageNumber: number;
  elementsFound: number;
  orders: Order[];

  constructor() { }

  ngOnInit() {
  }

}
