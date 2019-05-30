import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './Core/core.module';

import { AppComponent } from './app.component';
import { ShopModule } from './Features/shop/shop.module';
import { ProductModule } from './Features/product/product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    CoreModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
