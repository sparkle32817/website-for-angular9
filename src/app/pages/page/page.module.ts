import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { SummaryModule } from '../../modules/summary/summary.module';
import { ButtonsModule } from '../../modules/buttons/buttons.module';
import { HeaderModule } from '../../modules/header/header.module';

import { Page1Module } from './page1/page1.module';
import { Page2Module } from './page2/page2.module';
import { Page3Module } from './page3/page3.module';
import { Page4Module } from './page4/page4.module';
import { Page5Module } from './page5/page5.module';
import { Page6Module } from './page6/page6.module';
import { Page7Module } from './page7/page7.module';
import { Page8Module } from './page8/page8.module';
import { Page9Module } from './page9/page9.module';

import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    HeaderModule,
    ButtonsModule,
    SummaryModule,
    Page1Module,
    Page2Module,
    Page3Module,
    Page4Module,
    Page5Module,
    Page6Module,
    Page7Module,
    Page8Module,
    Page9Module,
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
