import { Component, OnInit, AfterContentInit, ViewChild, Input, EventEmitter, Output, ContentChild, TemplateRef, ViewContainerRef } from '@angular/core';
import { MenuItem } from './model/menu-item';

@Component({
  selector: 'dm-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit, AfterContentInit {
  @Input() id: string;
  @Input() label: string;
  @Input() iconClass: string;
  @Input() selected: boolean;
  @Input() customTpl: TemplateRef<any>;
  @Output() select = new EventEmitter<MenuItem>();

  @ContentChild(TemplateRef)
  private customContentTpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {

  }

  get tpl() : TemplateRef<any> {
    return this.customContentTpl || this.customTpl;
  }

  get hasCustomTemplate(): boolean {
    return this.tpl !== undefined;
  }

  didMenuItemClick(evt) {
    const menuItem = MenuItem.create({
      id: this.id,
      label: this.label
    });

    this.select.next(menuItem);
  }
}
