import { Component, OnInit } from '@angular/core';
import { SellerService } from 'src/app/_service/Seller.service';
import { OrderBrief } from 'src/app/_models/orderBrief';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-order-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class OrderListingComponent implements OnInit {
  elementsPerPage: number;
  totalElements: number; // total found orders
  pageNumber: number;
  orders: OrderBrief[]; // orders in page
  statusFilter: number;
  searchKey: string;
  shopId: string;
  numberOfpages: number;
  constructor(private sellerService: SellerService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.searchKey = "";
    this.statusFilter = -1;
    this.elementsPerPage = 10;
    this.pageNumber = 1;

    //
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.shopId = params['id'];
      }
    );
    this.sellerService.getOrdersBriefsByFilterOptionsCount(this.shopId, -this.statusFilter).subscribe(
      (data) => {
        this.totalElements = data;
      }
    );

    this.sellerService.getOrdersBriefsByFilterOptions(this.shopId, this.statusFilter, this.elementsPerPage, this.pageNumber).subscribe(
      (res) => {
        this.orders = res;
      }
    );
    this.numberOfpages = Math.ceil(this.orders.length / this.elementsPerPage);
  }

  onPageChanged(pageNumber: number) {
    this.sellerService.getOrdersBriefsByFilterOptions(this.shopId, this.statusFilter, this.elementsPerPage, this.pageNumber).subscribe(
      (res) => {
        this.orders = res;
      }
    );
  }

  onStatusChange(e) {
    // console.log(e);
    this.statusFilter = e.target.value;
    //based on each page
    this.sellerService.getOrdersBriefsByFilterOptionsCount(this.shopId, -this.statusFilter).subscribe(
      (data) => {
        this.totalElements = data;
      }
    );
    this.sellerService.getOrdersBriefsByFilterOptions(this.shopId, this.statusFilter, this.elementsPerPage, this.pageNumber).subscribe(
      (res) => {
        this.orders = res;
      }
    );
    this.numberOfpages = Math.ceil(this.orders.length / this.elementsPerPage);
    //reset pager number
    this.pageNumber = 1;
  }

  onElementsPerPageChange(e: Event) {
    this.elementsPerPage = +(e.srcElement as HTMLInputElement).value;
    //reset pagenumber
    this.pageNumber = 1;
    //get totalelements
    this.sellerService.getOrdersBriefsByFilterOptionsCount(this.shopId, -this.statusFilter).subscribe(
      (data) => {
        this.totalElements = data;
      }
    );
    this.sellerService.getOrdersBriefsByFilterOptions(this.shopId, this.statusFilter, this.elementsPerPage, this.pageNumber).subscribe(
      (res) => {
        this.orders = res;
      }
    );
    this.numberOfpages = Math.ceil(this.orders.length / this.elementsPerPage);
  }


  onSearch(e) {
    e.preventDefault();
  }

}
