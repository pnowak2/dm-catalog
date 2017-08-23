import { Injectable } from '@angular/core';
import { Tab } from './../interface/tab';

@Injectable()
export class TabsService {
  selectTab(tabs: Array<Tab>, tab: Tab): Array<Tab> {
    if (tab.disabled) {
      return tabs;
    }

    return tabs.map(t => ({
      ...t,
      selected: t === tab
    }));
  }

  closeTab(tabs: Array<Tab>, tab: Tab): Array<Tab> {
    if (tab.disabled) {
      return tabs;
    }

    return tabs.filter(t => t !== tab);
  }
}
