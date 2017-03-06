import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'asm-navstack',
  templateUrl: './navstack.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavstackComponent implements OnInit {
  closed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleClosed() {
    console.log('toggle')
    this.closed = !this.closed;
  }
}
