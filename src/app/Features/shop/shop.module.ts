import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [ShopDetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ShopDetailsComponent
  ]
})
export class ShopModule { }
