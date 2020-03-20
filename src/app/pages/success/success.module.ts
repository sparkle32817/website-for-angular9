import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../../modules/header/header.module';

import { SuccessComponent } from './success.component';

@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    SuccessComponent
  ]
})
export class SuccessModule { }
