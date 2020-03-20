import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentService } from 'src/app/payment.service';
import { List } from 'src/app/model/select.model';

@Component({
  selector: 'Page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.scss']
})
export class Page7Component implements OnInit {

  documents$: Observable<List[]>;
  genders$: Observable<List[]>;
  marriedStatus$: Observable<List[]>;
  relations$: Observable<List[]>;

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit(): void {
    this.documents$ = this.paymentService.getDocuments();
    this.genders$ = this.paymentService.getGender();
    this.marriedStatus$ = this.paymentService.getMarriedStatus();
    this.relations$ = this.paymentService.getRelations();
  }

}
