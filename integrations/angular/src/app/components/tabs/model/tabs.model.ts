import { Tab } from './../interface/tab';

export interface TabConfig {
  selectedTabIndex: number;
  tabs: Array<Tab>;
}

export class TabsModel {
  public static create(config: TabConfig): TabsModel {
    return new TabsModel(config);
  }

  private constructor(private config: TabConfig) {
    if (this.config.selectedTabIndex) {
      this.selectTab(this.tabs[this.config.selectedTabIndex]);
    }

    if (!this.isAnyTabSelected()) {
      this.selectDefaultTab();
    }
  }

  get tabs(): Array<Tab> {
    return this.config.tabs;
  }

  isAnyTabSelected(): boolean {
    const selectedTabs = this.tabs.filter(t => t.selected);
    return selectedTabs.length > 0;
  }

  selectDefaultTab(): void {
    const activeTabs = this.activeTabs();

    if (activeTabs.length > 0) {
      activeTabs[activeTabs.length - 1].selected = true;
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
    this.deselectAllTabs();
    this.selectDefaultTab();
  }
}
