import { MenuItem } from '../../menu-item/interface/menu-item';

export class MenuModel {
  private constructor(public items: Array<MenuItem>) { }

  public static create(items: Array<MenuItem>): MenuModel {
    return new MenuModel(items);
  }

  selectFirst() {
    if (this.items.length > 0) {
      this.items[0].selected = true;
    }
  }

  unselectAll() {
    this.items.forEach(i => {
      i.selected = false;
    });
  }

  selectNext() {
    if (this.items.length > 0) {
      const selectedIndex = this.items.findIndex(i => i.selected);
      this.unselectAll();
      const nextIndex = selectedIndex >= this.items.length - 1 ? 0 : selectedIndex + 1;
      this.items[nextIndex].selected = true;
      
    }
  }
}