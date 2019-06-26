import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from './Core/core.module';

import { AppComponent } from './app.component';
import { ShopModule } from './Features/shop/shop.module';
import { ProductModule } from './Features/product/product.module';
import { ProfileModule } from './Features/profile/profile.module';
import { CartModule } from './Features/cart/cart.module';
import { DashboardModule } from './Features/dashboard/dashboard.module';
import { RoutingModule } from './routing.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderedProductsService } from './_service/ordered-products.service';
import { OrderService } from './_service/order.service';
import { CategoryService } from './_service/category.service';
import { ProductService } from './_service/product.service';
import { ShopService } from './Features/shop/shop.service';
import { ReviewService } from './_service/review.service';
import { UserService } from './_service/user.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthService } from './_auth/auth.service';
import { AuthGuard } from './_auth/auth.guard';
import { CountryCityService } from './_service/country-city.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { JwtInterceptor } from './_utilities/interceptor';
import { AppInitService } from './_service/app-init.service';
import { Observable } from 'rxjs';
import { CartService } from './_service/cart.service';
import { AddEditGuardService } from './Features/shop/add-edit-shop/add-edit.guard';
import { FavitemsService } from './favitems.service';

function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init();
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ShopModule,
    CoreModule,
    ProductModule,
    ProfileModule,
    CartModule,
    DashboardModule,
    RoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    ShopService,
    ProductService,
    OrderService,
    OrderedProductsService,
    CategoryService,
    ReviewService,
    FavitemsService,
    UserService,
    CanDeactivateGuard,
    AuthService,
    CartService,
    AuthGuard,
    CountryCityService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    AppInitService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
