import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductListComponent } from './Features/product/product-list/product-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
    ]),

  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
