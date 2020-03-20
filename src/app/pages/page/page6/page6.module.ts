import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonsModule} from '../../../modules/buttons/buttons.module';
// import {CustomInputModule} from '../../common/custom-input/custom-input.module';
// import {CustomSelectModule} from '../../common/custom-select/custom-select.module';
// import {CustomDatepickerModule} from '../../common/custom-datepicker/custom-datepicker.module';
import { CustomPlanModule } from '../../../common/custom-plan/custom-plan.module';

import {Page6Component} from './page6.component';

@NgModule({
  declarations: [
    Page6Component
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    // CustomInputModule,
    // CustomSelectModule,
    // CustomDatepickerModule,
    CustomPlanModule
  ],
  exports: [
    Page6Component
  ]
})
export class Page6Module { }
