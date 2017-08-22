import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from './../interface/tab';

@Component({
  selector: 'dm-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit, Tab {
  @Input() label: string;
  @Input() selected: boolean;
  @Input() disabled: boolean;
  @Input() closed: boolean;
  @Output() close = new EventEmitter<Tab>();

  constructor() {
  }

  ngOnInit() {
  }

  didClickCloseTab() {
    this.close.next(this);
  }
}
