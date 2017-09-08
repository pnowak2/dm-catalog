import { MenuItem } from './../interface/menu-item';
import { Menu } from './../interface/menu';

export class MenuModel implements Menu {
  menuItems: Array<MenuItem>;

  private constructor(menu: Menu) {
    this.menuItems = menu ? menu.menuItems : [];
  }

  public static create(menu?: Menu): MenuModel {
    return new MenuModel(menu);
  }

  hasSelection(): boolean {
    return this.menuItems.some(m => m.selected);
  }

  selectedItem(): MenuItem {
    return this.menuItems.find(m => m.selected);
  }

  selectableItems(): Array<MenuItem> {
    return this.menuItems.filter(m => true);
  }

  selectNextItem(): void {
    // this.selectableItems.fi
  }
}