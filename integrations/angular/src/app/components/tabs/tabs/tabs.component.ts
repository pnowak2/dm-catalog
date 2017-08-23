import { TabsModel } from './../model/tabs.model';
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
  private vm: TabsModel;

  constructor(private tabsService: TabsService) { }

  ngAfterContentInit() {
    const tabs = this.tabComponents.toArray();
    this.vm = TabsModel.create({ tabs });
  }

  tabSelectClicked(tab: Tab) {
    this.vm.selectTab(tab);
  }

  tabCloseClicked(tab: Tab) {
    this.vm.closeTab(tab);
  }
}
