import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MySuppliesComponent } from './comp/my-supplies/my-supplies.component';
import { ShopComponent } from './comp/shop/shop.component';
import { MyhistoryComponent } from './comp/myhistory/myhistory.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"shop"
  },
  {
    path:"supplies",
    component:MySuppliesComponent
  },
  {
    path:"shop",
    component:ShopComponent
  },
  {
    path:"myhistory",
    component:MyhistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
