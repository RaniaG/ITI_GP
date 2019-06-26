import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/_models/shop';
import { ShopService } from '../shop.service';
import { CategoryService } from 'src/app/_service/category.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  shops: Shop[];
  categories: Category[];
  filters: { key: string, value: any }[];
  searchQuery: string;
  doneLoading: boolean = false;
  filter: {
    categoryId: number,
    rating: number,
    name: string,
    sort: string,
    sortdirection: string
  }
  constructor(private shopService: ShopService, private categoryService: CategoryService) {
    this.filters = [];
  }

  ngOnInit() {
    this.categoryService.isLoaded.subscribe(res => {
      this.categories = this.categoryService.categories;
    })
    this.shops = this.shopService.getAll(1);
    // this.shopService.getAll(1).subscribe(res => {
    //   debugger;
    //   this.shops = res as Shop[];
    // }, err => {
    //   debugger;
    //   console.log(err);
    // })
  }

  addFilter(filter: { key: string, value: any }) {
    if (!this.filters.find(el => el.key === filter.key && el.value === filter.value)) {
      this.filters.push(filter);
    }
  }
  updateFilter(filter: { key: string, value: string | number }) {
    this.filter[filter.key] = filter.value;
  }
  search(event) {
    this.searchQuery = event.target.value;
    event.target.value = "";
  }
  removeFilter(filterIndex: number) {
    this.filters.splice(filterIndex, 1);
  }
}
