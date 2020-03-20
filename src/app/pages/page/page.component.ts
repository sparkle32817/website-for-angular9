import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }],
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {

  // paymentForm: FormGroup;

  constructor() {}

  ngOnInit() {
    // this.paymentForm = new FormGroup({
    //   'formPage1': new FormGroup({
    //     'name': new FormControl(null, Validators.required),
    //   }),
    //   'formPage2': new FormGroup({}),
    //   'formPage3': new FormGroup({}),
    //   'formPage4': new FormGroup({}),
    //   'formPage5': new FormGroup({}),
    //   'formPage6': new FormGroup({}),
    //   'formPage7': new FormGroup({}),
    //   'formPage8': new FormGroup({}),
    //   'formPage9': new FormGroup({})
    // });
  }

}
