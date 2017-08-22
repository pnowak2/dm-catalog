import { TabModel } from './../model/tab.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from './../interface/tab';

@Component({
  selector: 'dm-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent {
  @Input() tab: Tab;
  @Output() close = new EventEmitter<Tab>();

  didClickCloseTab() {
    this.close.next(this.tab);
  }
}
