import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonsModule} from '../../../modules/buttons/buttons.module';
import {CustomInputModule} from '../../../common/custom-input/custom-input.module';
import {CustomSelectModule} from '../../../common/custom-select/custom-select.module';

import {Page2Component} from './page2.component';

@NgModule({
  declarations: [
    Page2Component
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    CustomInputModule,
    CustomSelectModule,
  ],
  exports: [
    Page2Component
  ]
})
export class Page2Module { }
