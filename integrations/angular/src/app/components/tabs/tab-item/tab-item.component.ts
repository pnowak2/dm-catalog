import { Component, OnInit, Input } from '@angular/core';
import { Tab } from './../interface/tab';

@Component({
  selector: 'dm-tab-item',
  templateUrl: './tab-item.component.html'
})
export class TabItemComponent implements OnInit, Tab {
  @Input() active: boolean;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }
}
