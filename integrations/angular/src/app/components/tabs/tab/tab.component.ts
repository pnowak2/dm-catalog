import { Component, OnInit, Input } from '@angular/core';
import { Tab } from './../interface/tab';

@Component({
  selector: 'dm-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit, Tab {
  @Input() active: boolean;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
