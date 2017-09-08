import { Component, AfterContentInit, ContentChildren, IterableDiffers, IterableDiffer, QueryList, EventEmitter, Output, Input } from '@angular/core';
import { MenuItemComponent } from './../menu-item/menu-item.component';
import { MenuItem } from './../api/interface/menu-item';
import { MenuModel } from './model/menu.model';

@Component({
  selector: 'dm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterContentInit {
  @ContentChildren(MenuItemComponent) contentItemComponents = new QueryList<MenuItemComponent>();
  @Output() select = new EventEmitter<MenuItem>();
  private differ: any;

  constructor(differs: IterableDiffers) {
    this.differ = differs.find([]).create(null);
  }

  didMenuItemSelect(menuItem: MenuItem) {
    this.vm.selectNext();
    this.select.next(menuItem);
  }

  get vm(): MenuModel {
    return MenuModel.create(
      this.contentItemComponents.toArray()
    );
  }

  ngAfterContentInit() {
    this.differ.diff(this.contentItemComponents);

    this.contentItemComponents.changes.subscribe((c: QueryList<MenuItemComponent>) => {
      const changes = this.differ.diff(this.contentItemComponents);
      if (changes) {
        changes.forEachAddedItem(r => {
          r.item.select.subscribe(this.didMenuItemSelect.bind(this));
        });
      }
    })

    this.contentItemComponents.forEach(menuItem => {
      menuItem.select.subscribe(this.didMenuItemSelect.bind(this));
    });
  }
}
