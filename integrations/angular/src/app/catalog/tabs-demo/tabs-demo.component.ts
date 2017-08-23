import { Component, OnInit } from '@angular/core';
import { Tab } from '../../components/tabs/interface/tab';

@Component({
  selector: 'dm-tabs-demo',
  templateUrl: './tabs-demo.component.html',
  styleUrls: ['./tabs-demo.component.scss']
})
export class TabsDemoComponent implements OnInit {
  tab: Tab;
  constructor() {
    this.tab = {
      label: 'My tab',
      selected: true,
      disabled: false
    };
  }

  ngOnInit() {
  }
}
