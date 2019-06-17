import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';
import { OrderBrief } from 'src/app/_models/orderBrief';

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
  orders: OrderBrief[];
  statusFilter: string;
  searchKey: string;
  constructor(sellerService: SellerService) { }

  ngOnInit() {

  }

}
