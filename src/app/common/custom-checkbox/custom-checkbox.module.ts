import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule} from '@angular/material/checkbox';

import { CustomCheckboxComponent } from './custom-checkbox.component';

@NgModule({
  declarations: [
    CustomCheckboxComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule
  ],
  exports: [
    CustomCheckboxComponent
  ]
})
export class CustomCheckboxModule { }
