import { Component, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { Tab } from './../interface/tab';
import { TabItemComponent } from './../tab-item/tab-item.component';
import { TabsService } from './../services/tabs.service';

@Component({
  selector: 'dm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent)
  private tabComponents: QueryList<TabItemComponent>;
  private tabs: Array<Tab>;

  constructor(private tabsService: TabsService) { }

  ngAfterContentInit() {
    this.tabs = this.tabComponents.toArray();
  }

  tabClicked(tab: Tab) {
    this.tabs = this.tabsService.selectTab(
      this.tabs,
      tab
    );
  }

  tabCloseClicked(tab: Tab) {
    this.tabs = this.tabsService.closeTab(
      this.tabs,
      tab
    );
  }
}
