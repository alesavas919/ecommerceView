import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import("./module/login/login.module").then(m=>m.LoginModule)
const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"login"
  },
  {
    path:"login",
    loadChildren:()=>import("./module/user/user.module").then(m=>m.UserModule)
  },
  {
    path:"shop",
    loadChildren:()=>import("./module/product/product.module").then(m=>m.ProductModule)
  },
  {
    path:"payment",
    loadChildren:()=>import("./module/myshop/myshop.module").then(m=>m.MyshopModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
