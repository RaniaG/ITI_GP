import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuantityPickerComponent } from './quantity-picker/quantity-picker.component';
import { PageHeaderComponent } from './page-header/page-header.component';


@NgModule({
  declarations: [RatingComponent, PaginationComponent, PageHeaderComponent, QuantityPickerComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    RatingComponent,
    PaginationComponent,
    NgbModule,
    QuantityPickerComponent,
    PageHeaderComponent
  ]
})
export class SharedModule { }
