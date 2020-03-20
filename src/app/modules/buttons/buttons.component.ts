import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input()
  backPath: String;

  @Input()
  continuePath: String;

  constructor() { }

  ngOnInit(): void {
  }

}
