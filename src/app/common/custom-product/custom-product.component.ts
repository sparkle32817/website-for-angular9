import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';

@Component({
  selector: 'CustomProduct',
  templateUrl: './custom-product.component.html',
  styleUrls: ['./custom-product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomProductComponent implements OnInit {

  @Input()
  title: String;
  @Input()
  content: String;
  @Input()
  price: String;

  constructor() { }

  ngOnInit(): void {
  }

}
