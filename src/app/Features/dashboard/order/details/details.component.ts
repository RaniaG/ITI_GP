import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Order } from 'src/app/_models/order';
import { SellerService } from 'src/app/_service/Seller.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  orderId: string; // known as package
  shopId: string;
  readToShip: boolean;
  order: Order;
  constructor(private activeRoute: ActivatedRoute, private sellerService: SellerService) {
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params: Params) => {
        this.orderId = params['orderId'];
        this.shopId = params['id'];
      }
    );
    this.order = this.sellerService.getPackageById(this.orderId);
  }

}
