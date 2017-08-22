import { Tab } from './../interface/tab';

export class TabModel implements Tab {
  label: string;
  selected: boolean;
  disabled: boolean;
  closed: boolean;
}
