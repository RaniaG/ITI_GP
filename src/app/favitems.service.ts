import { Injectable } from '@angular/core';
import { Product } from './_models/product';

@Injectable({
  providedIn: 'root'
})
export class FavitemsService {
  favitem: Product[];
  constructor() {
    this.favitem = []
  }

  add(product: Product) {
    product.id = this.favitem.length + 1;
    this.favitem.push(product);
  }

  getAll() {
    return this.favitem;
  }
}
