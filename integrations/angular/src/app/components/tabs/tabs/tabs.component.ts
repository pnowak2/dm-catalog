import { Tab } from './../interface/tab';
import { Component, AfterContentInit, ContentChildren } from '@angular/core';
import { TabItemComponent } from './../tab-item/tab-item.component';

@Component({
  selector: 'dm-tabs',
  templateUrl: './tabs.component.html'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent)
  private tabs: Array<Tab>;

  ngAfterContentInit() {

  }

  tabClicked(tab: Tab) {
    this.tabs.forEach((ti) => {
      ti.active = false;
    });

    tab.active = true;
  }
}
