import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {ButtonsModule} from '../../../modules/buttons/buttons.module';
import {CustomInputModule} from '../../../common/custom-input/custom-input.module';
import {CustomSelectModule} from '../../../common/custom-select/custom-select.module';
import {CustomDatepickerModule} from '../../../common/custom-datepicker/custom-datepicker.module';

import {Page1Component} from './page1.component';

@NgModule({
  declarations: [
    Page1Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, ReactiveFormsModule,
    ButtonsModule,
    CustomInputModule,
    CustomSelectModule,
    CustomDatepickerModule,
  ],
  exports: [
    Page1Component
  ]
})
export class Page1Module { }
