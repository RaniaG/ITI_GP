import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = null;
  currentUser: User
  constructor(private router: Router) {
    this.token = " sdsfsdf";
    this.currentUser = {
      id: 1,
    }
  }

  login(email: string, password: string) {
    //save token to local storage
  }
  signup(user: User) {

  }
  logout() {
    //remove token from local storage
  }
  getToken() {
    //retrieve token from local storage
  }
  isAuthenticated(): boolean {
    //check if a user is logged in
    return this.token !== null;
  }
}