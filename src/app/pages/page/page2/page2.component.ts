import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { PaymentService } from '../../../payment.service';
import { List } from '../../../model/select.model';

@Component({
  selector: 'Page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  states$: Observable<List[]>;

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.states$ = this.paymentService.getStates();
  }

}
