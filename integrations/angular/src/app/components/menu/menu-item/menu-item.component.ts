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
  @Output() select = new EventEmitter<MenuItem>();

  @ContentChild(TemplateRef)
  private customContentTpl: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {

  }

  get hasCustomTemplate(): boolean {
    return this.customContentTpl !== undefined;
  }

  didMenuItemClick(evt) {
    console.log(this.customContentTpl);
    const menuItem = MenuItem.create({
      id: this.id,
      label: this.label
    });

    this.select.next(menuItem);
  }
}
