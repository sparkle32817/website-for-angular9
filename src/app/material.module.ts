import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  exports: [
    MatGridListModule,
    MatDatepickerModule,
    MatStepperModule,
    MatRadioModule
  ]
})
export class MaterialModule {}
