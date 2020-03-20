import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPlanComponent } from './custom-plan.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    CustomPlanComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    CustomPlanComponent
  ]
})
export class CustomPlanModule { }
