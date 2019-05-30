import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
