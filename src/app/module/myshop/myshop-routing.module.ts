import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './comp/payment/payment.component';
import { ShoppingCartComponent } from './comp/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"cart"
  },
  {
    path:"payment",
    component:PaymentComponent
  },
  {
    path:"cart",
    component:ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyshopRoutingModule { }
