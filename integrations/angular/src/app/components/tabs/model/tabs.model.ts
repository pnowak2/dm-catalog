import { Tab } from './../interface/tab';

export class TabsModel {
  constructor(public tabs: Array<Tab>) {
    if (!this.isAnyTabSelected()) {
      this.selectDefaultTab();
    }
  }

  isAnyTabSelected(): boolean {
    const selectedTabs = this.tabs.filter(t => t.selected);
    return selectedTabs.length > 0;
  }

  selectDefaultTab(): void {
    const activeTabs = this.activeTabs();
    if (activeTabs.length > 0) {
      activeTabs[0].selected = true;
    }
  }

  activeTabs(): Array<Tab> {
    return this.tabs.filter(t => !t.disabled && !t.closed);
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

    this.selectDefaultTab();
  }
}
