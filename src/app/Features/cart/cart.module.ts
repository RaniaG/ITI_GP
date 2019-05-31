import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartTableComponent } from './cart-table/cart-table.component';
import { ShippingInformationComponent } from './shipping-information/shipping-information.component';
import { FeesAndPaymentMethodsComponent } from './fees-and-payment-methods/fees-and-payment-methods.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component'

@NgModule({
  declarations: [
    CartTableComponent,
    ShippingInformationComponent,
    FeesAndPaymentMethodsComponent,
    OrderSummaryComponent
  ],
  imports: [CommonModule],
  exports: [
    CartTableComponent,
    ShippingInformationComponent,
    FeesAndPaymentMethodsComponent,
    OrderSummaryComponent
  ]
})
export class CartModule { }
