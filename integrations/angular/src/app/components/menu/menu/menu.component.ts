import { Component, AfterContentInit, ContentChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { MenuItemComponent } from './../menu-item/menu-item.component';
import { MenuItem } from './../menu-item/model/menu-item';

@Component({
  selector: 'dm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterContentInit {
  @ContentChildren(MenuItemComponent) menuItems = new QueryList<MenuItemComponent>();
  @Output() select = new EventEmitter<MenuItem>();

  ngAfterContentInit() {
    this.menuItems.forEach(menuItem => {
      menuItem.select.subscribe((m: MenuItem) => {
        this.select.next(m);
      });
    });
  }
}
