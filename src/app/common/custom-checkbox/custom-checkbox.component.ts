import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'CustomCheckbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CustomCheckboxComponent implements OnInit {

  @Input()
  label: String;

  @Input()
  size: String;

  constructor() { }

  ngOnInit(): void {
  }

}
