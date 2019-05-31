import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@NgModule({
  declarations: [ProductCardComponent, ProductListComponent, RelatedProductsComponent, AddEditProductComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductCardComponent,
    ProductListComponent,
    RelatedProductsComponent,
    AddEditProductComponent
  ]
})
export class ProductModule { }
