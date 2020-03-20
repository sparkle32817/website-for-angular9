import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {ButtonsComponent} from './buttons.component';

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonsComponent
  ]
})
export class ButtonsModule { }
