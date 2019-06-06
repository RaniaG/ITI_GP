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


const routes: Routes = [
  {
    path: 'shop', children: [
      { path: '', component: ShopListComponent },
      { path: 'add', component: AddEditShopComponent, canDeactivate: [CanDeactivateGuard] },
      { path: 'edit/:id', component: AddEditShopComponent },
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
    RouterModule.forChild(routes)
  ],
  providers: [

  ],
  exports: [
    ShopDetailsComponent,
    ShopListComponent,
    AddEditShopComponent
  ]
})
export class ShopModule { }
