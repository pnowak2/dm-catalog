import { Component, AfterViewInit, ContentChildren, QueryList, Optional } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'dm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterViewInit {
  @ContentChildren(TabComponent) tabs:QueryList<TabComponent>;

  ngAfterViewInit() {
    this.tabs.forEach((tab) => {
      console.log(tab);
    });
  }
}
