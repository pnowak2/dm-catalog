import { TabsModel } from './../model/tabs.model';
import { Tab } from './../interface/tab';
import { Component, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabItemComponent } from './../tab-item/tab-item.component';

@Component({
  selector: 'dm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
  @Input() selectedTabIndex: number;

  @ContentChildren(TabItemComponent)
  private tabComponents: QueryList<Tab>;
  private tabsModel: TabsModel;

  ngAfterContentInit() {
    const selectedTabIndex = this.selectedTabIndex;
    const tabs = this.tabComponents.toArray();

    this.tabsModel = TabsModel.create({
      selectedTabIndex,
      tabs
    });
  }

  tabClicked(tab: Tab) {
    this.tabsModel.selectTab(tab);
  }

  tabClosed(tab: Tab) {
    this.tabsModel.closeTab(tab);
  }
}
