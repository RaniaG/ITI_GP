import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { FavitemsService } from 'src/app/favitems.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
@Input('Product') product :Product;
@Output()
DeleteModal = new EventEmitter<number>();
clicked=false;
  constructor(private FavitemsService: FavitemsService) { }

  ngOnInit() {
  }
  addFavItem(product){
    console.log(product);
    this.clicked=true;
    this.FavitemsService.add(product);
    
  }
  finalPrice() :number
  {
    let result;
    if(this.product.discount != null)
      result = this.product.price - this.product.discount;
    else
      result = this.product.price;
    return result;
  }
 
  deleteProduct(){
    this.DeleteModal.emit(this.product.id);
  }
}
