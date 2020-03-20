import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'CustomDatepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrls: ['./custom-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomDatepickerComponent implements OnInit {

  @Input()
  label: String;

  constructor() {
  }

  ngOnInit(): void {
  }

}
