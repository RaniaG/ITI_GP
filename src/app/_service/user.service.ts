import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseurl } from '../_utilities/baseUrl';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: User[];
  constructor(private http: HttpClient) {
    this.data = [
      { id: '1', firstname: 'Bassant', lastname: 'mohamed', username: 'Bassant Fahmy', bio: 'ahora o nunca.', photo: 'assets/images/woman.jpg', password: '123456', email: 'bassantfahmy@gmail.com' },
      { id: '2', firstname: 'Ahmed', lastname: 'mohamed', username: 'Ahmed Fahmy', password: '123456', email: 'ahmedfahmy@gmail.com' },
    ]
  }
  getAll() {
    return this.data;
  }
  getById(id: string) {

    // return this.data.find(a => a.id === id);
  }
  add(user: User) {
    return this.http.post(`${baseurl}/api/Account/Register`, user)
  }
  update(user: User) {
    // const i = this.data.findIndex(a => a.id === user.id);
    // this.data[i] = user;

  }
  delete(id: number) {
    // const i = this.data.findIndex(a => a.id === id);
    // this.data.splice(i, 1);
  }
}
