import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss']
})
export class ShopDetailsComponent implements OnInit {

  rate: number
  showPhotoUploadModal: boolean = false;
  showCoverUploadModal: boolean = false;

  coverPhoto = null;
  constructor(private shopService: ShopService) {
    this.rate = 3.6;
  }

  ngOnInit() {
  }


  handleCoverPhoto(action: string) {
    this.showCoverUploadModal = false;
    switch (action) {
      case 'Save':
        this.shopService.changeShopCover(this.coverPhoto);
        break;
      case 'Close':
      case 'Cancel':
      default:
        this.coverPhoto = null;
        break;
    }
  }
}
