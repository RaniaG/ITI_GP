import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: User[];
  constructor() {
    this.data = [

      { id: 1, firstname: 'Bassant', lastname: 'mohamed', username: 'Bassant Fahmy',bio:'ahora o nunca.', password: '123456', email: 'bassantfahmy@gmail.com' },
      { id: 2, firstname: 'Ahmed', lastname: 'mohamed', username: 'Ahmed Fahmy', password: '123456', email: 'ahmedfahmy@gmail.com' },

    ]
  }


  getAll() {
    return this.data;
  }
  getById(id: Number): User {

    return this.data.find(a => a.id === id);
  }
  add(user: User) {
    user.id = this.data.length + 1;
    this.data.push(user);
  }
  updata(user: User) {
    const i = this.data.findIndex(a => a.id === user.id);
    this.data[i] = user;

  }
  delete(id: number) {
    const i = this.data.findIndex(a => a.id === id);
    this.data.splice(i, 1);
  }
}
