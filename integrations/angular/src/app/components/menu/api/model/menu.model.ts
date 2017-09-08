import { MenuItem } from './../interface/menu-item';
import { Menu } from './../interface/menu';

export class MenuModel implements Menu {
  menuItems: Array<MenuItem>;

  private constructor(menu: Menu) {
    if(menu) {
      this.menuItems = menu.menuItems;
    }
  }

  public static create(menu?: Menu): Menu {
    return new MenuModel(menu);
  }
}