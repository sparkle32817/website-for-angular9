import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ButtonsModule} from '../../modules/buttons/buttons.module';
import {CustomInputModule} from '../../common/custom-input/custom-input.module';
import {CustomSelectModule} from '../../common/custom-select/custom-select.module';
import {CustomDatepickerModule} from '../../common/custom-datepicker/custom-datepicker.module';

import { HeaderModule } from '../../modules/header/header.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    ButtonsModule,
    CustomInputModule,
    CustomSelectModule,
    CustomDatepickerModule,
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
