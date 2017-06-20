import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class PopoverDemoComponent implements OnInit {
  title = 'Popover Title which is very long and cannot fit in this afsfsd';
  content = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt desperis.';

  constructor() { }

  ngOnInit() {
  }

  beforeShow() {
  }

  afterShow() {
  }

  beforeHide() {
  }

  afterHide() {
  }
}
