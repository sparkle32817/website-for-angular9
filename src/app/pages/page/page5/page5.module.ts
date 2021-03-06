import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonsModule} from '../../../modules/buttons/buttons.module';
import {CustomInputModule} from '../../../common/custom-input/custom-input.module';
import {CustomSelectModule} from '../../../common/custom-select/custom-select.module';
import {CustomDatepickerModule} from '../../../common/custom-datepicker/custom-datepicker.module';
import {CustomCheckboxModule} from '../../../common/custom-checkbox/custom-checkbox.module';
import {PayCardModule} from '../../../common/pay-card/pay-card.module';

import {Page5Component} from './page5.component';

@NgModule({
  declarations: [
    Page5Component
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    CustomInputModule,
    CustomSelectModule,
    CustomDatepickerModule,
    CustomCheckboxModule,
    PayCardModule
  ],
  exports: [
    Page5Component
  ]
})
export class Page5Module { }
