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
    this.tabsModel = new TabsModel({
      selectedTabIndex: this.selectedTabIndex,
      tabs: this.tabComponents.map(tab => tab)
    });
  }

  tabClicked(tab: Tab) {
    this.tabsModel.selectTab(tab);
  }

  tabClosed(tab: Tab) {
    this.tabsModel.closeTab(tab);
  }
}
