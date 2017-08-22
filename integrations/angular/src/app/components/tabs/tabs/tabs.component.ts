import { Component, AfterContentInit, ContentChildren, QueryList, Optional } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'dm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) 
  private tabs: QueryList<TabComponent>;
  private tbs: Array<TabComponent>;

  ngAfterContentInit() {
    const tabs = this.tabs.toArray();
    this.tbs = this.tabs.toArray();

    this.tabs.forEach((tab) => {
      tab.active = false;
    });

    tabs[1].active = true;
  }
}
