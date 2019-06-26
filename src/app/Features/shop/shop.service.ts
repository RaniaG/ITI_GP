import { Injectable } from '@angular/core';
import { Shop } from 'src/app/_models/shop';
import { Product } from 'src/app/_models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseurl } from '../../_utilities/baseUrl';
const TOKEN = "";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class ShopService {

  data: Shop[] = []
  constructor(private http: HttpClient) {
  }

  add(shop: Shop) {
    return this.http.post(`${baseurl}/api/Shops`, shop);
  }
  edit(shop: Shop) {
    return this.http.put(`${baseurl}/api/Shops`, shop);
  }
  getAll(pageNumber: number) {
    return this.http.get(`${baseurl}/api/Shops/${pageNumber}`);
  }
  getById(id: string) {
    return this.http.get(`${baseurl}/api/Shop/${id}`);
  }
  getFollowedShops() {
    return this.http.get(`${baseurl}/api/FollowedShop`);
  }


  validateShopName(name: string, id: string = null) {
    if (id)
      return this.http.post(`${baseurl}/api/Shop/ValidateName/${name}?id=${id}`, {}, httpOptions);
    else return this.http.post(`${baseurl}/api/Shop/ValidateName/${name}`, {}, httpOptions);

  }
  deliveryAddresses(arr: { districtId: number, cityId: number, countryId: number, shopId: string }[]) {
    return this.http.post(`${baseurl}/api/Shop/DeliveryAddress`, arr);
  }
  changeShopCover(photo: string) {
    //get id of logged in user shop
  }
  changeShopPhoto(photo: string) {
    //get id of logged in user shop
  }
  followShop(id: string) {
    return this.http.post(`${baseurl}/api/Shop/Follow/${id}`, {});
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
