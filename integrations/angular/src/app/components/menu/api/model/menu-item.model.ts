import { MenuItem } from './../interface/menu-item';

export class MenuItemModel implements MenuItem {
  id: string;
  label?: string;
  iconClass?: string;
  selected?: boolean;
  disabled?: boolean;

  private constructor(menuItem: MenuItem) {
    if(menuItem) {
      this.id = menuItem.id;
      this.label = menuItem.label;
      this.iconClass = menuItem.iconClass;
      this.selected = menuItem.selected;
      this.disabled = menuItem.disabled;
    }
  }

  public static create(menuItem?: MenuItem): MenuItem {
    return new MenuItemModel(menuItem);
  }
}