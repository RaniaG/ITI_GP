import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [RatingComponent, PaginationComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    RatingComponent,
    NgbModule
  ]
})
export class SharedModule { }
