import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PaymentService } from 'src/app/payment.service';
import { List } from 'src/app/model/select.model';

@Component({
  selector: 'Page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  installments$: Observable<List[]>;
  institutes$: Observable<List[]>;
  selected='card';

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.installments$ = this.paymentService.getInstallment();
    this.institutes$ = this.paymentService.getinstitutions();
  }

}
