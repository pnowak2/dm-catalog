import { Tab } from './../interface/tab';

export class TabsModel {
  constructor(public tabs: Array<Tab>) { }

  activeTabs(): Array<Tab> {
    return this.tabs.filter(t => !t.disabled);
  }

  deselectAllTabs(): void {
    this.tabs.forEach((t: Tab) => {
      t.selected = false;
    });
  }

  selectTab(tab: Tab): void {
    if (tab.disabled) {
      return;
    }

    this.deselectAllTabs();
    tab.selected = true;
  }

  closeTab(tab: Tab): void {
    if (tab.disabled) {
      return;
    }

    tab.closed = true;
  }
}
