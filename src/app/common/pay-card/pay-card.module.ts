import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import { PayCardComponent } from './pay-card.component';

@NgModule({
  declarations: [
    PayCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatRadioModule
  ],
  exports: [
    PayCardComponent
  ]
})
export class PayCardModule { }
