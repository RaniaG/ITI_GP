import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { ProductService } from 'src/app/_service/product.service';
import { Product } from 'src/app/_models/product';
import { forEach } from '@angular/router/src/utils/collection';
import { CategoryService } from 'src/app/_service/category.service';
import { Category } from 'src/app/_models/category';
import { AuthService } from 'src/app/_auth/auth.service';
import { User } from 'src/app/_models/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;
  products : Product[];
  categories: Category[];
  productsNames :string[];
  isAuthenticated : boolean;
  currentUser : User;
  public model: any;



  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.productsNames.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )


  constructor(private productService : ProductService,private categoryService : CategoryService,private authServive:AuthService,private router : Router) { 

  }

  ngOnInit() {
     this.products = this.productService.getAll();
     this.productsNames= []; 
     this.products.forEach((product,i) => {
     this.productsNames[i]=product.name;
   });

   this.categories = this.categoryService.getAll();
   this.isAuthenticated = this.authServive.isAuthenticated();
   this.currentUser = this.authServive.getUser();
  }

  logOut(){
    this.authServive.logout();
    this.router.navigate(['/home']);
    
  }

}
