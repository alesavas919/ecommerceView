import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyshopRoutingModule } from './myshop-routing.module';
import { ShoppingCartComponent } from './comp/shopping-cart/shopping-cart.component';
import { PaymentComponent } from './comp/payment/payment.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    MyshopRoutingModule
  ]
})
export class MyshopModule { }
