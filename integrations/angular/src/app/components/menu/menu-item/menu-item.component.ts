import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dm-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
