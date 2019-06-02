import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { RouterModule } from '@angular/router';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    ProductCardComponent, 
    ProductListComponent, 
    RelatedProductsComponent, 
    AddEditProductComponent, 
    DeleteProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'products' , component: ProductListComponent},
      { path: 'products/add', component: AddEditProductComponent},
      { path: 'products/edit/:id' , component: AddEditProductComponent},
      { path: 'products/delete/:id' , component: DeleteProductComponent},
      { path: 'products/details/:id' , component: ProductDetailComponent},
    ])
  ],
  exports: [
    ProductCardComponent,
    ProductListComponent,
    RelatedProductsComponent,
    AddEditProductComponent,
    DeleteProductComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
