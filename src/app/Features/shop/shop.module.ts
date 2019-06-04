import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AddEditShopComponent } from './add-edit-shop/add-edit-shop.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ShopDetailsComponent, ShopCardComponent, ShopListComponent, AddEditShopComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    ShopDetailsComponent,
    ShopListComponent,
    AddEditShopComponent,
  ]
})
export class ShopModule { }
