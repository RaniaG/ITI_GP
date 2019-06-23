import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ShopModule } from '../shop/shop.module';
import { ProductModule } from '../product/product.module';



@NgModule({
  declarations: [ProfileComponent, EditProfileComponent],
  imports: [
    CommonModule,
    NgbModule,
    ShopModule,
    ReactiveFormsModule,
    ProductModule,
    RouterModule.forChild([
      { path: 'profile', component: ProfileComponent },
      { path: 'editprofile', component: EditProfileComponent },
    ])
  ],
  exports: [
    ProfileComponent,
    EditProfileComponent
  ]
})
export class ProfileModule { }
