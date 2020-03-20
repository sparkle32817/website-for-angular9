import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSelectModule} from '@angular/material/select';

import {CustomSelectComponent} from './custom-select.component';

@NgModule({
  declarations: [
    CustomSelectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    CustomSelectComponent
  ]
})
export class CustomSelectModule { }
