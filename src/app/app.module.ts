import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './Core/core.module';

import { AppComponent } from './app.component';
import { ShopModule } from './Features/shop/shop.module';
import { ProductModule } from './Features/product/product.module';
import { ProfileModule } from './Features/profile/profile.module';
import { CartModule } from './Features/cart/cart.module';
import { DashboardModule } from './Features/dashboard/dashboard.module';
import { RoutingModule } from './routing.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderedProductsService } from './_service/ordered-products-service';
import { OrderService } from './_service/order-service';
import { CategoryService } from './_service/category.service';
import { ProductService } from './_service/product.service';
import { ShopService } from './Features/shop/shop.service';
import { ReviewService } from './_service/review.service';
import { UserService } from './_service/user.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthService } from './_auth/auth.service';
import { AuthGuard } from './_auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    CoreModule,
    ProductModule,
    ProfileModule,
    CartModule,
    DashboardModule,
    RoutingModule
  ],
  providers: [
    ShopService,
    ProductService,
    OrderService,
    OrderedProductsService,
    CategoryService,
    ReviewService,
    UserService,
    CanDeactivateGuard,
    AuthService,
    AuthGuard
  ],
  bootstrap : [AppComponent]
})
export class AppModule { }
