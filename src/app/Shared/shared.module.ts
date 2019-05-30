import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [RatingComponent],
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
