import { Tab } from './../interface/tab';

export interface TabConfig {
  tabs: Array<Tab>;
}

export class TabsModel {
  public static create(config: TabConfig): TabsModel {
    return new TabsModel(config);
  }

  private constructor(private config: TabConfig) {
    if (!this.isAnyTabSelected()) {
      this.selectDefaultTab();
    }
  }

  get tabs(): Array<Tab> {
    return this.config.tabs;
  }

  canSelectTab(tab: Tab): boolean {
    return !tab.disabled;
  }

  canCloseTab(tab: Tab): boolean {
    return !tab.disabled;
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
    return this.tabs.filter(t => !t.disabled /*&& !t.closed*/);
  }

  deselectAllTabs(): void {
    this.tabs.forEach((t: Tab) => {
      t.selected = false;
    });
  }

  selectTab(tab: Tab): void {
    if (this.canSelectTab(tab)) {
      this.deselectAllTabs();
      tab.selected = true;
    }
  }

  closeTab(tab: Tab): void {
    if (this.canCloseTab(tab)) {
      const idx = this.tabs.indexOf(tab);
      tab.selected = false;
      this.tabs.splice(idx, 1);

      this.selectDefaultTab();
    }
  }
}
