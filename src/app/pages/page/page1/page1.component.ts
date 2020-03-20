import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';

import { PaymentService } from '../../../payment.service';
import { List } from '../../../model/select.model';

import {
  tap,
  switchMap,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";

@Component({
  selector: 'Page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  documents$: Observable<List[]>;
  genders$: Observable<List[]>;
  marriedStatus$: Observable<List[]>;

  // @Input() payForm: FormGroup;

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.documents$ = this.paymentService.getDocuments();
    this.genders$ = this.paymentService.getGender();
    this.marriedStatus$ = this.paymentService.getMarriedStatus();
  }

}
