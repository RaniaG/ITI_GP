import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseurl } from '../_utilities/baseUrl';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;
  currentUser: User
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-urlencoded'
    })
  };
  constructor(private router: Router, private http: HttpClient) {
    this.token = null;
    this.currentUser = null

  }

  login(username: string, password: string) {
    //save token to local storage
    let data = "username=" + username + "&password=" + password + "&grant_type=password";

    let obs = this.http.post(`${baseurl}/Token`, data, this.httpOptions);
    obs.subscribe(res => {
      debugger;
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
  getUser() {
    if (!this.currentUser) {
      this.http.get(`${baseurl}/api/Account/LoggedInUser`).subscribe(res => {
        this.currentUser = res;
      }, err => {
        // debugger;
        console.log(err);
      })
    } else return this.currentUser;

  }
  getToken() {
    //retrieve token from local storage
    this.token = localStorage.getItem('Token');
  }
  isAuthenticated(): boolean {
    //check if a user is logged in
    return this.token !== null;
  }
}
