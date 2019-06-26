import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Order } from 'src/app/_models/order';
import { SellerService } from 'src/app/_service/Seller.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orderId: number; // known as package
  shopId: string;
  readToShip: boolean;
  order: Order;

  shipped: boolean;
  delivered: boolean;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private sellerService: SellerService) {
    this.shipped = false;
    this.delivered = false;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.orderId = +params['orderId'];
        this.shopId = params['id'];
      }
    );
    this.sellerService.getPackageById(this.shopId, this.orderId).subscribe(
      (res) => {
        this.order = res;
      }
    );

    debugger;
    if (this.order) {
      this.router.navigate(['/404']);
    }
    else {
      if (this.order.status == 2) {
        this.shipped = true;
        this.delivered = false;
      }
      else if (this.order.status == 3) {
        this.shipped = true;
        this.delivered = true;
      }
    }
  }

  onOrderReadyToShip() {
    this.shipped = true;
    this.sellerService.updatePackageStatus(this.shopId, this.order).subscribe(
      (res) => {
        this.order = res;
      }
    );
  }
  onOrderDelivered(packageId) {
    this.delivered = true;
    this.sellerService.updatePackageStatus(this.shopId, this.order).subscribe(
      (res) => {
        this.order = res;
      }
    );
  }

}
