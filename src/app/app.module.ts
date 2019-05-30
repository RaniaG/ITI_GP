import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './Core/core.module';

import { AppComponent } from './app.component';
import { ShopModule } from './Features/shop/shop.module';
import { ProfileModule } from './Features/profile/profile.module';
import { RoutingModule } from './routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    CoreModule,
    ProfileModule,
    RoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
