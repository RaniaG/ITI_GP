import { Injectable } from '@angular/core';
import { Shop } from 'src/app/_models/shop';
import { Product } from 'src/app/_models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseurl } from '../../_utilities/baseUrl';
import { AuthService } from 'src/app/_auth/auth.service';
const TOKEN = "";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class ShopService {

  data: Shop[] = [
    { id: '0', name: "EmbroideryShop", about: "lafdfgdfgdfgsfgggggggggggggggggg afsdsdsff       asdasd", rating: 1.5, policy: "lafdfgdfgdfgsfgggggggggggggggggg afsdsdsff       asdasd", subscription: 1, followers: [], products: [], sales: 10 },
    { id: '1', name: "Creative_Shop", about: "lafdfgdfgdfgsfgggggggggggggggggg afsdsdsff       asdasd", rating: 2, policy: "lafdfgdfgdfgsfgggggggggggggggggg afsdsdsff       asdasd", subscription: 0, followers: [], products: [], sales: 0 }

  ]
  constructor(private http: HttpClient) {
  }

  add(shop: Shop): Shop {
    shop.id = "" + this.data.length;
    this.data.push(shop);
    return this.data[this.data.length - 1];
    // return this.http.post(`${baseurl}/api/Shops`, shop);
  }
  edit(shop: Shop) {
    let shopIndex = this.data.findIndex(el => el.id === shop.id);
    this.data[shopIndex] = shop;
    // return this.http.put(`${baseurl}/api/Shops`, shop);
  }
  getAll(pageNumber: number, filterString: string = "") {
    return this.data;
    // return this.http.get(`${baseurl}/api/Shops/${pageNumber}${filterString}`);
  }
  getById(id: string) {
    // return this.http.get(`${baseurl}/api/Shop/${id}`);
    return this.data.find(el => el.id === id);
  }
  getFollowedShops() {
    // return this.http.get(`${baseurl}/api/FollowedShop`);
  }


  validateShopName(name: string, id: string = null) {
    return this.data.find(el => el.name == name) ? false : true;
    // if (id)
    //   return this.http.post(`${baseurl}/api/Shop/ValidateName/${name}?id=${id}`, {}, httpOptions);
    // else return this.http.post(`${baseurl}/api/Shop/ValidateName/${name}`, {}, httpOptions);

  }
  deliveryAddresses(shopId: string, arr: { districtId: number, cityId: number, countryId: number, shopId: string }[]) {
    // return this.http.post(`${baseurl}/api/Shop/DeliveryAddress`, arr);
    let shopIndex = this.data.findIndex(el => el.id === shopId);
    this.data[shopIndex].deliveryAddresses = arr;
  }
  changeShopCover(photo: string) {
    //get id of logged in user shop
  }
  changeShopPhoto(photo: string) {
    //get id of logged in user shop
  }
  followShop(id: string) {
    // return this.http.post(`${baseurl}/api/Shop/Follow/${id}`, {});
    // this.data.find(el => el.id === id).followers.push(this.authService.currentUser);
  }

  // getShopSubscription(shopId: string):any any {
  //   let output: any;
  //   fetch(`${baseurl}/rpc/shops/GetSubscriptionType/${shopId}`,
  //     {
  //       method: "GET",
  //       mode: "cors",
  //       headers: new Headers({
  //         'content-type': 'application/json',
  //         authentication: `bearer ${TOKEN}`
  //       })
  //     }).then(res => {
  //       output = res.text();
  //       debugger;
  //     }).catch(error => {
  //       output = 404;
  //     });
  //   return output;
  // } 
  getShopSubscription(shopId: string): Observable<any> {
    return this.http.get(`${baseurl}/rpc/shops/GetSubscriptionType/${shopId}`);
  }
  // getInventoryInfo(shopId: string): { usedSlots: number, maxSlots: number } {
  //   let output: any;
  //   fetch(`${baseurl}/rpc/shops/GetShopInventoryInfo/${shopId}`,
  //     {
  //       method: "GET",
  //       mode: "cors",
  //       headers: new Headers({
  //         'content-type': 'application/json',
  //         authentication: `bearer ${TOKEN}`
  //       })
  //     }).then(response => {
  //       output = response;
  //     }).catch(error => {
  //       output = 404;
  //     });
  //   return output;
  // }
  getInventoryInfo(shopId: string): Observable<any> {
    return this.http.get(`${baseurl}/rpc/shops/GetShopInventoryInfo/${shopId}`);
  }
}
