import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddAddressFormComponent } from '../Features/cart/add-address-form/add-address-form.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavbarComponent, LoginComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signUp', component: SignupComponent },
      {path:'address', component: AddAddressFormComponent}
    

    ])
  ],
   exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,

  ]
})
export class CoreModule { }
