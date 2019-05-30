import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './Core/core.module';
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ShopModule } from './Features/shop/shop.module';
import { ProfileModule } from './Features/profile/profile.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    CoreModule,
    ProfileModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
