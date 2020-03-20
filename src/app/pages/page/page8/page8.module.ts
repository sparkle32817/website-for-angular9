import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonsModule} from '../../../modules/buttons/buttons.module';
import { CustomProductModule } from 'src/app/common/custom-product/custom-product.module';

import {Page8Component} from './page8.component';

@NgModule({
  declarations: [
    Page8Component
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    CustomProductModule
  ],
  exports: [
    Page8Component
  ]
})
export class Page8Module { }
