import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatRadioModule} from '@angular/material/radio';

import {ButtonsModule} from '../../../modules/buttons/buttons.module';
import {CustomInputModule} from '../../../common/custom-input/custom-input.module';
import {CustomSelectModule} from '../../../common/custom-select/custom-select.module';
import {CustomDatepickerModule} from '../../../common/custom-datepicker/custom-datepicker.module';
import {CustomCheckboxModule} from '../../../common/custom-checkbox/custom-checkbox.module';
import {PayCardModule} from '../../../common/pay-card/pay-card.module';

import {Page3Component} from './page3.component';

@NgModule({
  declarations: [
    Page3Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    ButtonsModule,
    CustomInputModule,
    CustomSelectModule,
    CustomDatepickerModule,
    CustomCheckboxModule,
    PayCardModule
  ],
  exports: [
    Page3Component
  ]
})
export class Page3Module { }
