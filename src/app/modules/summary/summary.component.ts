import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  showable = false;

  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    this.showable = !this.showable;
  }

}
