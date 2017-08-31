import { Component, AfterContentInit, ContentChildren, ContentChild, TemplateRef, QueryList, EventEmitter, Output, Input } from '@angular/core';
import { MenuItemComponent } from './../menu-item/menu-item.component';
import { MenuItem } from './../menu-item/interface/menu-item';
import { MenuModel } from './model/menu.model';

@Component({
  selector: 'dm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterContentInit {
  @Input() menuItems: Array<MenuItem>;
  @ContentChild(TemplateRef, { read: TemplateRef }) itemTemplate; 
  @ContentChildren(MenuItemComponent) contentItemComponents = new QueryList<MenuItemComponent>();
  @Output() select = new EventEmitter<MenuItem>();

  didMenuItemSelect(menuItem: MenuItem) {
    this.select.next(menuItem);
    this.vm.selectNext();
  }

  get vm(): MenuModel {
    const menuItems = this.menuItems || this.contentItemComponents.toArray();

    return MenuModel.create(menuItems);
  }

  ngAfterContentInit() {
    this.contentItemComponents.forEach(menuItem => {
      menuItem.select.subscribe(this.didMenuItemSelect.bind(this));
    });
  }
}
