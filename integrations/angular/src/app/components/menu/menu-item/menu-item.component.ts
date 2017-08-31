import { Component, ViewChild, Input, EventEmitter, Output, ContentChild, TemplateRef } from '@angular/core';
import { MenuItem } from './interface/menu-item';

@Component({
  selector: 'dm-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements MenuItem {
  @Input() id: string;
  @Input() label: string;
  @Input() iconClass: string;
  @Input() disabled: boolean;
  @Input() selected: boolean;
  @Input() customTpl: TemplateRef<any>;
  @Output() select = new EventEmitter<MenuItem>();
  @Input() set menuItem(menuItem: MenuItem) {
    this.id = menuItem.id;
    this.label = menuItem.label;
    this.iconClass = menuItem.iconClass;
    this.disabled = menuItem.disabled;
    this.selected = menuItem.selected;
  }

  @ContentChild(TemplateRef)
  private customContentTpl: TemplateRef<any>;

  get tpl(): TemplateRef<any> {
    return this.customContentTpl || this.customTpl;
  }

  get hasCustomTemplate(): boolean {
    return this.tpl !== undefined;
  }

  didMenuItemClick(evt) {
    const menuItem = {
      id: this.id,
      label: this.label
    };

    this.select.next(menuItem);
  }
}
