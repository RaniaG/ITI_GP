import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailsComponent } from './shop-details/shop-details.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ShopListComponent } from './shop-list/shop-list.component';
import { AddEditShopComponent } from './add-edit-shop/add-edit-shop.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from 'src/app/can-deactivate-guard.service';
import { AuthGuard } from 'src/app/_auth/auth.guard';
import { AddEditGuardService } from './add-edit-shop/add-edit-guard.service';
import { ProductModule } from '../product/product.module';


const routes: Routes = [
  {
    path: 'shop', children: [
      { path: '', component: ShopListComponent },
      { path: 'add', component: AddEditShopComponent, canActivate: [AuthGuard, AddEditGuardService], canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id', component: AddEditShopComponent, canDeactivate: [CanDeactivateGuard] },
      { path: ':id', component: ShopDetailsComponent }
    ]
  }
]
@NgModule({
  declarations: [ShopDetailsComponent, ShopCardComponent, ShopListComponent, AddEditShopComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ProductModule
  ],
  providers: [
    AddEditGuardService
  ],
  exports: [
    ShopDetailsComponent,
    ShopListComponent,
    ShopCardComponent,
    AddEditShopComponent
  ]
})
export class ShopModule { }
