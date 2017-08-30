import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './model/menu-item';

@Component({
  selector: 'dm-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {
  @Input() id: string;
  @Input() label: string;
  @Output() select = new EventEmitter<MenuItem>();

  constructor() { }

  ngOnInit() {
  }

  didMenuItemClick(evt) {
    const menuItem = MenuItem.create({
      id: this.id,
      label: this.label
    });
    this.select.next(menuItem);
  }
}
