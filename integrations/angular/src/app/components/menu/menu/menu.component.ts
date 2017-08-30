import { Component, AfterContentInit, ContentChildren, ViewChildren, QueryList, EventEmitter, Output, Input } from '@angular/core';
import { MenuItemComponent } from './../menu-item/menu-item.component';
import { MenuItem } from './../menu-item/model/menu-item';

@Component({
  selector: 'dm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterContentInit {
  @Input() menuItems: Array<MenuItem>;
  @ContentChildren(MenuItemComponent) contentItemComponents = new QueryList<MenuItemComponent>();
  @Output() select = new EventEmitter<MenuItem>();

  didMenuItemSelect(menuItem: MenuItem) {
    this.select.next(menuItem);
  }

  ngAfterContentInit() {
    this.contentItemComponents.forEach(menuItem => {
      menuItem.select.subscribe(this.didMenuItemSelect.bind(this));
    });
  }
}
