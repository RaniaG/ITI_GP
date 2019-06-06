import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [RatingComponent, PaginationComponent, PageHeaderComponent, ConfirmComponent],
  imports: [
    CommonModule,
    NgbModule

  ],
  entryComponents: [ConfirmComponent],
  exports: [
    RatingComponent,
    PaginationComponent,
    NgbModule,
    PageHeaderComponent,
    ConfirmComponent
  ]
})
export class SharedModule { }
