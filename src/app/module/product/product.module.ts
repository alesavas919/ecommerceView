import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { MySuppliesComponent } from './comp/my-supplies/my-supplies.component';
import { ShopComponent } from './comp/shop/shop.component';
import { MyhistoryComponent } from './comp/myhistory/myhistory.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    MySuppliesComponent,
    ShopComponent,
    MyhistoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule
  ]
})
export class ProductModule { }
