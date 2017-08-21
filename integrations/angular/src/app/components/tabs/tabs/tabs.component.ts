import { Component, OnInit, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'dm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabComponent) tabs:QueryList<TabComponent>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tabs.forEach((tab) => {
      console.log(tab);
    });
  }
}
