import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dm-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  @Input() active: boolean;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
