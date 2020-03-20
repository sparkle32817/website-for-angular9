import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {CustomDatepickerComponent} from './custom-datepicker.component';

@NgModule({
  declarations: [
    CustomDatepickerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    CustomDatepickerComponent
  ]
})
export class CustomDatepickerModule { }
