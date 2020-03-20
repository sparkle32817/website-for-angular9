import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CustomLabelComponent} from './custom-label.component';

@NgModule({
  declarations: [
    CustomLabelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomLabelComponent
  ]
})
export class CustomLabelModule { }
