import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import { List } from '../../model/select.model';

@Component({
  selector: 'CustomSelect',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomSelectComponent implements OnInit {

  @Input()
  label: String;

  @Input()
  items$: Observable<List[]>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
