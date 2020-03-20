import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomInputModule } from '../../common/custom-input/custom-input.module';
import { CustomLabelModule } from '../../common/custom-label/custom-label.module';

import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    CustomInputModule,
    CustomLabelModule
  ],
  exports: [
    SummaryComponent
  ]
})
export class SummaryModule { }
