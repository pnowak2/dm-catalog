import { Component, OnInit, Input } from '@angular/core';
import { Tab } from './../interface/tab';

@Component({
  selector: 'dm-tab-item',
  templateUrl: './tab-item.component.html'
})
export class TabItemComponent implements OnInit, Tab {
  @Input() label: string;
  @Input() selected: boolean;
  @Input() disabled: boolean;
  @Input() closed: boolean;

  constructor() { }

  ngOnInit() {
  }
}
