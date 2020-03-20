import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentService } from 'src/app/payment.service';
import { List } from 'src/app/model/select.model';

@Component({
  selector: 'Page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss']
})
export class Page5Component implements OnInit {

  institutes$: Observable<List[]>;

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.institutes$ = this.paymentService.getinstitutions();
  }

}
