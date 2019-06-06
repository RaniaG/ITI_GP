import { Injectable } from '@angular/core';
import { Shop } from 'src/app/_models/shop';

@Injectable()
export class ShopService {

  data: Shop[]
  constructor() {
    this.data = [{ id: 1, name: 'RaniaShop' }, { id: 2, name: 'MyShop' }]
  }

  add(shop: Shop) {

  }
  edit(id: number, shop: Shop) {

  }
  getAll() {
    return this.data;
  }
  getById(id: number) {

  }
  validateShopName(name: string): boolean {
    return true;
  }
}
