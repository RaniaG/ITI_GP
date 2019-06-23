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
  statusFilter: string;
  searchKey: string;
  shopId: string;
  numberOfpages: number;
  constructor(private sellerService: SellerService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.searchKey = "";
    this.statusFilter = '';
    this.elementsPerPage = 10;
    this.pageNumber = 1;

    //
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.shopId = params['id'];
      }
    )
    this.totalElements = this.sellerService.getOrdersBriefsByFilterOptionsCount('', null, null, null);
    this.orders = this.sellerService.getOrdersBriefsByFilterOptions('', null, null, null);
    this.numberOfpages = Math.ceil(this.orders.length / this.elementsPerPage);
  }

  onPageChanged(pageNumber: number) {
    // console.log('success')
    //get next/previous data
    let startIndex = (pageNumber - 1) * this.elementsPerPage;
    let limitIndex = startIndex + this.elementsPerPage;
    this.orders = this.sellerService.getOrdersBriefsByFilterOptions('shipped', null, null, null);
  }

  onStatusChange(e) {
    // console.log(e);
    this.statusFilter = e.target.value;
    //based on each page
    this.orders = this.sellerService.getOrdersBriefsByFilterOptions(this.statusFilter, null, null, null);
    this.totalElements = this.orders.length; // leha get count of total
    this.numberOfpages = Math.ceil(this.orders.length / this.elementsPerPage);
    //reset pager number
    this.pageNumber = 1;
  }

  onElementsPerPageChange(e: Event) {
    this.elementsPerPage = +(e.srcElement as HTMLInputElement).value;
    //reset pagenumber
    this.pageNumber = 1;
    //get totalelements

    //fetch new data
  }

  // onOrderReadyToShip(packageId: string) {
  //   console.log(packageId);
  //   this.router.navigate(['/shop', this.shopId, 'order', packageId, 'details']);
  // }

  onSearch(e) {
    e.preventDefault();
  }

}
