import { TabsModel } from './../model/tabs.model';
import { Tab } from './../interface/tab';
import { Component, AfterContentInit, ContentChildren } from '@angular/core';
import { TabItemComponent } from './../tab-item/tab-item.component';

@Component({
  selector: 'dm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent)
  private tabComponents: Array<Tab>;
  private tabsModel: TabsModel;

  ngAfterContentInit() {
    this.tabsModel = new TabsModel(this.tabComponents);
  }

  tabClicked(tab: Tab) {
    this.tabsModel.selectTab(tab);
  }
}
