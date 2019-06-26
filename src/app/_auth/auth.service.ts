import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseurl } from '../_utilities/baseUrl';
import { ShopService } from '../Features/shop/shop.service';
import { Observable } from 'rxjs';
import { AppInitService } from '../_service/app-init.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;
  currentUser: User = null;
  hasShop: boolean;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-urlencoded'
    })
  };
  constructor(private router: Router, private http: HttpClient, private shopService: ShopService, private appinit: AppInitService) {
    // debugger;
    this.appinit.retrievedCurrentUser.subscribe(obs => {
      this.currentUser = obs;
    })
    this.token = this.appinit.token || null;
    this.hasShop = false;

  }

  login(username: string, password: string) {
    //save token to local storage
    let data = "username=" + username + "&password=" + password + "&grant_type=password";

    let obs = this.http.post(`${baseurl}/Token`, data, this.httpOptions);
    obs.subscribe(res => {
      debugger;
      this.currentUser = res;
      this.token = res['access_token'];
      localStorage.setItem("Token", this.token);
    })
    return obs;
  }
  logout() {
    //remove token from local storage
    this.token = null;
    localStorage.removeItem("Token");
  }
  getUserAsync() {
    return this.http.get(`${baseurl}/api/Account/LoggedInUser`);
  }
  getUser() {
    return this.currentUser;
  }
  getToken() {
    //retrieve token from local storage
    this.token = this.token || localStorage.getItem('Token');
    return this.token;
  }
  isAuthenticated(): boolean {
    //check if a user is logged in
    return this.token !== null;
  }
}
