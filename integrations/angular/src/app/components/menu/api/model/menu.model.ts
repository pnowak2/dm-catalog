import { MenuItemModel } from './menu-item.model';
import { MenuItem } from './../interface/menu-item';
import { Menu } from './../interface/menu';

export class MenuModel implements Menu {
  menuItems: Array<MenuItemModel>;

  private constructor(menuItems: MenuItemModel[]) {
    this.menuItems = menuItems;
  }

  public static create(menuItems: MenuItemModel[] = []): MenuModel {
    return new MenuModel(menuItems);
  }

  hasSelection(): boolean {
    return this.menuItems.some(m => m.selected);
  }

  selectedItem(): MenuItem {
    return this.menuItems.find(m => m.selected);
  }

  selectableItems(): Array<MenuItem> {
    return this.menuItems.filter(m => m.isSelectable());
  }
}