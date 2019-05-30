import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductCardComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
