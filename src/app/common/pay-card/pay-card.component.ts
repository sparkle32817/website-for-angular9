import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'PaymentCard',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PayCardComponent implements OnInit {

  @Input()
  type: String;
  @Input()
  value: String;
  @Input()
  first: String;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

}
