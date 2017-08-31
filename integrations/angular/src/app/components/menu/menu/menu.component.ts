import { Component, AfterContentInit, ContentChildren, ViewChildren, TemplateRef, QueryList, EventEmitter, Output, Input } from '@angular/core';
import { MenuItemComponent } from './../menu-item/menu-item.component';
import { MenuItem } from './../menu-item/interface/menu-item';
import { MenuModel } from './model/menu.model';

@Component({
  selector: 'dm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterContentInit {
  @Input() menuItems: Array<MenuItem>;
  @Input() customTpl: TemplateRef<any>;
  @ContentChildren(MenuItemComponent) contentItemComponents = new QueryList<MenuItemComponent>();
  @Output() select = new EventEmitter<MenuItem>();

  didMenuItemSelect(menuItem: MenuItem) {
    this.select.next(menuItem);
    this.vm.selectNext();
  }

  get vm(): MenuModel {
    if(this.menuItems) {
      return MenuModel.create(this.menuItems);
    } else {
      return MenuModel.create(this.contentItemComponents.toArray());
    }
  }

  ngAfterContentInit() {
    this.contentItemComponents.forEach(menuItem => {
      menuItem.select.subscribe(this.didMenuItemSelect.bind(this));
    });
  }
}
