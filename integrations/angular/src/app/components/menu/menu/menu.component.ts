import { Component, AfterContentInit, OnChanges, ContentChildren, KeyValueDiffers, ContentChild, TemplateRef, QueryList, EventEmitter, Output, Input } from '@angular/core';
import { MenuItemComponent } from './../menu-item/menu-item.component';
import { MenuItem } from './../menu-item/interface/menu-item';
import { MenuModel } from './model/menu.model';

@Component({
  selector: 'dm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterContentInit {
  @ContentChild(TemplateRef, { read: TemplateRef }) itemTemplate;
  @ContentChildren(MenuItemComponent) contentItemComponents = new QueryList<MenuItemComponent>();
  @Output() select = new EventEmitter<MenuItem>();

  didMenuItemSelect(menuItem: MenuItem) {
    this.select.next(menuItem);
    this.vm.selectNext();
  }

  get vm(): MenuModel {
    const menuItems = this.contentItemComponents.toArray();

    return MenuModel.create(menuItems);
  }

  ngAfterContentInit() {
    this.contentItemComponents.changes.subscribe((c: QueryList<MenuItemComponent>) => {
      c.forEach((menuItem: MenuItemComponent) => {
        if(menuItem.select.observers.length === 0) {
          menuItem.select.subscribe(this.didMenuItemSelect.bind(this));
        }
      });
    })
    
    this.contentItemComponents.forEach(menuItem => {
      menuItem.select.subscribe(this.didMenuItemSelect.bind(this));
    });
  }
}
