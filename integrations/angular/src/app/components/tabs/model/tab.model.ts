import { Tab } from './../interface/tab';

export class TabModel implements Tab {
  label: string;
  selected: boolean;
  disabled: boolean;
  closed: boolean;

  private constructor(tab: Tab) {
    this.label = tab.label;
    this.selected = tab.selected;
    this.disabled = tab.disabled;
  }

  public static create(tab: Tab): Tab {
    return new TabModel(tab);
  }
}
