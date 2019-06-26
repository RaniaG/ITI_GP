import { Injectable } from '@angular/core';
import { AuthService } from '../_auth/auth.service';
import { Observable, Subject } from 'rxjs';
import { User } from '../_models/user';
import { HttpClient } from '@angular/common/http';
import { baseurl } from '../_utilities/baseUrl';


@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  token: string = null
  currentUser: User = null
  retrievedCurrentUser: Subject<any> = new Subject<any>();
  constructor(private http: HttpClient) {

  }
  Init() {
    // this.authService.getToken();
    // debugger;
    this.token = localStorage.getItem('Token');
    return new Promise((resolve, reject) => {
      // debugger;
      if (this.token) {
        this.http.get(`${baseurl}/api/Account/LoggedInUser`)
          .subscribe(res => {
            // debugger;
            this.currentUser = res;
            this.retrievedCurrentUser.next(res);
            resolve();
          }, err => {
            // debugger;
            console.log(err);
            this.retrievedCurrentUser.next(null);
            reject();
          })

      } else resolve();
    })
  }
}
