import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';

import { CustomProductComponent } from './custom-product.component';

@NgModule({
  declarations: [
    CustomProductComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports: [
    CustomProductComponent
  ]
})
export class CustomProductModule { }
