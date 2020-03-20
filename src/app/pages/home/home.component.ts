import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { List } from '../../model/select.model';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  lists: List[] = [
    {key: '1', value: 'test1'},
    {key: '2', value: 'test2'},
    {key: '3', value: 'test3'},
    {key: '4', value: 'test4'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
