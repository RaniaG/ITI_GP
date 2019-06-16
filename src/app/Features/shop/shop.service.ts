import { Injectable } from '@angular/core';
import { Shop } from 'src/app/_models/shop';
import { Product } from 'src/app/_models/product';

@Injectable()
export class ShopService {

  data: Shop[] = [
    {
      id: 1,
      name: 'MyShop',
      rating: 4.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.',
      policies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.'
      , userId: 1
    },
    {
      id: 1,
      name: 'MyShop',
      rating: 4.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.',
      policies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.'
      , userId: 1
    }, {
      id: 1,
      name: 'MyShop',
      rating: 4.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.',
      policies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.'
      , userId: 1
    }, {
      id: 1,
      name: 'MyShop',
      rating: 4.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.',
      policies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.'
      , userId: 1
    }, {
      id: 1,
      name: 'MyShop',
      rating: 4.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.',
      policies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.'
      , userId: 1
    }, {
      id: 1,
      name: 'MyShop',
      rating: 4.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.',
      policies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.'
      , userId: 1
    }, {
      id: 1,
      name: 'MyShop',
      rating: 4.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.',
      policies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.'
      , userId: 1
    }
  ]
  constructor() {
  }

  add(shop: Shop) {

  }
  edit(id: number, shop: Shop) {

  }
  getAll(): Shop[] {
    return this.data;
  }
  getById(id: number): Shop {
    return {
      id: 1,
      name: 'MyShop',
      rating: 4.5,
      about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.',
      policies: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis unde esse exercitationem, alias dolorum facere illo architecto quasi delectus necessitatibus, placeat repellendus! Officiis, cumque repellendus nisi explicabo nesciunt modi sint.'
      , userId: 1
    }
  }

  getRelatedProducts(): Product[] {
    return [
      { id: 1, name: 'bag', price: 500, images: ['https://images-eu.ssl-images-amazon.com/images/I/41HDKfMA1mL._SX395_QL70_.jpg', 'https://cdn1.ebags.com/is/image/im6/340526_1_1?resmode=4&op_usm=1,1,1,&qlt=70,1&hei=1500&wid=1500&align=0,1&res=1500'] },
      { id: 2, name: 'bag2', price: 500, discount: 200, images: ['https://images-eu.ssl-images-amazon.com/images/I/41HDKfMA1mL._SX395_QL70_.jpg', 'https://cdn1.ebags.com/is/image/im6/340526_1_1?resmode=4&op_usm=1,1,1,&qlt=70,1&hei=1500&wid=1500&align=0,1&res=1500'] },
      { id: 3, name: 'bag3', price: 500, images: ['https://images-eu.ssl-images-amazon.com/images/I/41HDKfMA1mL._SX395_QL70_.jpg', 'https://cdn1.ebags.com/is/image/im6/340526_1_1?resmode=4&op_usm=1,1,1,&qlt=70,1&hei=1500&wid=1500&align=0,1&res=1500'] }

    ]
  }
  validateShopName(name: string): boolean {
    return true;
  }
  changeShopCover(photo: string) {
    //get id of logged in user shop
  }
  changeShopPhoto(photo: string) {
    //get id of logged in user shop
  }
  followShop(id: number) {
    //verify user is logged in
  }
}
