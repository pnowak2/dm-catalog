import { PopoverComponent } from './../../components/popover/popover.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'dm-popover-demo',
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class PopoverDemoComponent implements OnInit {
  @ViewChild(PopoverComponent) popover: PopoverComponent;

  title = 'Popover Title which is very long and cannot fit in this afsfsd';
  content = `
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
  Lorem ipsum dolor sit amet, consectetuer adipiscing
  elit, sed diam nonummy nibh euismod tincidunt desperis.
  `;

  constructor() { }

  ngOnInit() { }

  buttonMouseOver(evt) {
    this.popover.show(evt);
  }

  beforeShow() {
    // let n = Math.random() * 100;
    // let content = '';
    // for(let i = 0; i < n; i++) {
    //   content += 'hello ';
    // }
    // this.content = content;
  }

  afterShow() {
  }

  beforeHide() {
  }

  afterHide() {
  }
}
