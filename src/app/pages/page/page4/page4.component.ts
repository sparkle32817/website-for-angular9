import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PaymentService } from 'src/app/payment.service';
import { List } from 'src/app/model/select.model';


@Component({
  selector: 'Page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss']
})
export class Page4Component implements OnInit {

  institutes$: Observable<List[]>;
  selected='card';

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.institutes$ = this.paymentService.getinstitutions();
  }

}
