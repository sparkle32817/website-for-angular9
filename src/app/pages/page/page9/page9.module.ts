import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonsModule} from '../../../modules/buttons/buttons.module';
import {CustomInputModule} from '../../../common/custom-input/custom-input.module';
import {CustomSelectModule} from '../../../common/custom-select/custom-select.module';

import {Page9Component} from './page9.component';

@NgModule({
  declarations: [
    Page9Component
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    CustomInputModule,
    CustomSelectModule,
  ],
  exports: [
    Page9Component
  ]
})
export class Page9Module { }
