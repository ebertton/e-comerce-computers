import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
