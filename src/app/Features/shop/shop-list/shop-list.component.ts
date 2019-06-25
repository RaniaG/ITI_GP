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
  constructor(private shopService: ShopService, private categoryService: CategoryService) {
    this.filters = [];
  }

  ngOnInit() {
    // this.shops = this.shopService.getAll();
    this.categories = this.categoryService.getAll();

  }

  addFilter(filter: { key: string, value: any }) {
    if (!this.filters.find(el => el.key === filter.key && el.value === filter.value)) {
      this.filters.push(filter);
    }
  }
  search(event) {
    this.searchQuery = event.target.value;
    event.target.value = "";
  }
  removeFilter(filterIndex: number) {
    this.filters.splice(filterIndex, 1);
  }
}
