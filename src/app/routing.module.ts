import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductListComponent } from './Features/product/product-list/product-list.component';
import { ShopListComponent } from './Features/shop/shop-list/shop-list.component';

import { DashboardListingComponent } from './Features/dashboard/dashboard-listing/dashboard-listing.component';
import { OrderListingComponent } from './Features/dashboard/order/listing/listing.component';
import { OrderDetailsComponent } from './Features/dashboard/order/details/details.component';
import { SignupComponent } from './Core/signup/signup.component';
import { LoginComponent } from './Core/login/login.component';
import { HomeComponent } from './Core/home/home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
    ], { anchorScrolling: 'enabled' }),

  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
