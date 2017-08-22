import { Tab } from './../interface/tab';

export class TabModel implements Tab {
  constructor(
    public label: string,
    public selected: boolean,
    public disabled: boolean) {
  }
}
