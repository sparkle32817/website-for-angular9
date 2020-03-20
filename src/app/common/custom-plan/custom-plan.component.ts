import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'CustomPlan',
  templateUrl: './custom-plan.component.html',
  styleUrls: ['./custom-plan.component.scss']
})
export class CustomPlanComponent implements OnInit {

  @Input()
  icon: String;

  @Input()
  title: String;

  @Input()
  text1: String;

  @Input()
  text2: String;

  constructor() { }

  ngOnInit(): void {
  }

}
