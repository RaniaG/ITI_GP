import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CartTableComponent } from './cart-table/cart-table.component';
import { ShippingInformationComponent } from './shipping-information/shipping-information.component';
import { FeesAndPaymentMethodsComponent } from './fees-and-payment-methods/fees-and-payment-methods.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component'
import { SharedModule } from 'src/app/Shared/shared.module';
import { AddAddressFormComponent } from './add-address-form/add-address-form.component';

@NgModule({
  declarations: [
    CartTableComponent,
    ShippingInformationComponent,
    FeesAndPaymentMethodsComponent,
    OrderSummaryComponent,
    AddAddressFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CartTableComponent,
    ShippingInformationComponent,
    FeesAndPaymentMethodsComponent,
    OrderSummaryComponent,
    AddAddressFormComponent
  ]
})
export class CartModule { }
