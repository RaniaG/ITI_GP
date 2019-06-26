import { Category } from '../_models/category';
import { HttpClient } from '@angular/common/http';
import { baseurl } from '../_utilities/baseUrl';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CategoryService {

    categories: Category[];
    isLoaded: Subject<any> = new Subject();
    constructor(private http: HttpClient) {
        this.http.get(`${baseurl}/api/Categories`).subscribe((response: Category[]) => {
            this.categories = response;
            this.isLoaded.next();
        }, error => {
            this.isLoaded.next();
            console.log(error);
        })
    }

    getAll() {
        return this.categories;
    }

    getById(id: number): Category {
        return this.categories.find(c => c.id === id);
    }

    // addCategory(c: Category) {
    //     c.id = this.categories.length + 1;
    //     this.categories.push(c);
    // }

    // updateCategory(c: Category) {
    //     const i = this.categories.findIndex(e => e.id === c.id);
    //     this.categories[i] = c;
    // }

    // deleteCategory(id: number) {
    //     const i = this.categories.findIndex(e => e.id === id);
    //     this.categories.splice(i, 1);
    // }

}