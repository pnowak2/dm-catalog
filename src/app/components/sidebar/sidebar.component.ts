import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  closed = false;

  constructor() { }

  ngOnInit() {
  }

  toggleClosed() {
    console.log('toggle')
    this.closed = !this.closed;
  }
}
