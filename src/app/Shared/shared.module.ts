import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RatingComponent } from './rating/rating.component';
import { PaginationComponent } from './pagination/pagination.component';
import { QuantityPickerComponent } from './quantity-picker/quantity-picker.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ImgCropperComponent } from './img-cropper/img-cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [RatingComponent, PaginationComponent, PageHeaderComponent, ConfirmComponent, ImgCropperComponent, ModalComponent, QuantityPickerComponent],
  imports: [
    CommonModule,
    NgbModule,
    ImageCropperModule
  ],
  entryComponents: [ConfirmComponent],
  exports: [
    RatingComponent,
    PaginationComponent,
    NgbModule,
    QuantityPickerComponent,
    PageHeaderComponent,
    ConfirmComponent,
    ImgCropperComponent,
    ModalComponent
  ]
})
export class SharedModule { }
