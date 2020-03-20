import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'CustomLabel',
  templateUrl: './custom-label.component.html',
  styleUrls: ['./custom-label.component.scss']
})
export class CustomLabelComponent implements OnInit {

  @Input() topLabel: String;
  @Input() leftLabel: String;
  @Input() rightLabel: String;
  @Input() minus: boolean;
  @Input() borderBottom: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
