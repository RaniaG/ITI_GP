import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavbarComponent, LoginComponent, SignupComponent, HomeComponent],
  imports: [
    CommonModule
  ],
   exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ]
})
export class CoreModule { }
