import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';
import { OrderBrief } from 'src/app/_models/orderBrief';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class OrderListingComponent implements OnInit {
  elementsPerPage: number;
  totalElements: number;
  pageNumber: number;
  orders: OrderBrief[];
  statusFilter: string;
  searchKey: string;
  shopId: string;
  numberOfpages: number;
  constructor(private sellerService: SellerService, private router: Router) {
    this.searchKey = "";
    this.statusFilter = '';
    this.elementsPerPage = 10;
    this.pageNumber = 0;

    //
    this.shopId = "123";
  }

  ngOnInit() {
    this.orders = this.sellerService.getOrdersBriefsByFilterOptions('', null, null, null);
    if (this.orders.length) {
      this.pageNumber = 1
    }
    this.numberOfpages = Math.ceil(this.orders.length / this.elementsPerPage);
  }

  onPageChanged(pageNumber: number) {
    console.log('success')
    this.orders = this.sellerService.getOrdersBriefsByFilterOptions('shipped', null, null, null);
  }

  onStatusChange(e) {
    // console.log(e);
    this.statusFilter = e.target.value;
    this.orders = this.sellerService.getOrdersBriefsByFilterOptions(this.statusFilter, null, null, null);
  }

  onElementsPerPageChange(e: Event) {
    // console.log(e);
    this.elementsPerPage = +(e.srcElement as HTMLInputElement).value;
  }

  onOrderReadyToShip(packageId: string) {
    console.log(packageId);
    this.router.navigate(['/shop', this.shopId, 'order', packageId, 'details']);
  }

  onSearch(e) {
    e.preventDefault();
  }

}
