import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

import { CustomInputModule } from './common/custom-input/custom-input.module';
import { CustomSelectModule } from './common/custom-select/custom-select.module';
import { CustomLabelModule } from './common/custom-label/custom-label.module';
import { CustomDatepickerModule } from './common/custom-datepicker/custom-datepicker.module';
import { PayCardModule } from './common/pay-card/pay-card.module';
import { CustomCheckboxModule } from './common/custom-checkbox/custom-checkbox.module';
import { CustomPlanModule } from './common/custom-plan/custom-plan.module';
import { CustomProductModule } from './common/custom-product/custom-product.module';

import { SummaryModule } from './modules/summary/summary.module';
import { ButtonsModule } from './modules/buttons/buttons.module';
import { HeaderModule } from './modules/header/header.module';

import { HomeComponent } from './pages/home/home.component';
import { SuccessModule } from './pages/success/success.module';
import { PageModule } from './pages/page/page.module';
import { Page1Module } from './pages/page/page1/page1.module';
import { Page2Module } from './pages/page/page2/page2.module';
import { Page3Module } from './pages/page/page3/page3.module';
import { Page4Module } from './pages/page/page4/page4.module';
import { Page5Module } from './pages/page/page5/page5.module';
import { Page6Module } from './pages/page/page6/page6.module';
import { Page7Module } from './pages/page/page7/page7.module';
import { Page8Module } from './pages/page/page8/page8.module';
import { Page9Module } from './pages/page/page9/page9.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    HeaderModule,
    ButtonsModule,
    SummaryModule,
    CustomInputModule,
    CustomSelectModule,
    CustomLabelModule,
    CustomDatepickerModule,
    PayCardModule,
    CustomCheckboxModule,
    CustomPlanModule,
    CustomProductModule,
    SuccessModule,
    PageModule,
    Page1Module,
    Page2Module,
    Page3Module,
    Page4Module,
    Page5Module,
    Page6Module,
    Page7Module,
    Page8Module,
    Page9Module,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
