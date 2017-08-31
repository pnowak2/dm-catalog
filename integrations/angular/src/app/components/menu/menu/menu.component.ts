import { Component, AfterContentInit, OnDestroy, ViewContainerRef, ComponentFactoryResolver, ContentChildren, ContentChild, ViewChild, TemplateRef, QueryList, EventEmitter, Output, Input } from '@angular/core';
import { MenuItemComponent } from './../menu-item/menu-item.component';
import { MenuItem } from './../menu-item/interface/menu-item';
import { MenuModel } from './model/menu.model';
@Component({
  selector: 'dm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements AfterContentInit, OnDestroy {
  @Input() menuItems: Array<MenuItem>;
  @ViewChild('dynamicContainer', { read: ViewContainerRef}) dynamicContainer: ViewContainerRef;
  @ContentChild(TemplateRef, { read: TemplateRef }) itemTemplate; 
  @ContentChildren(MenuItemComponent) contentItemComponents = new QueryList<MenuItemComponent>();
  @Output() select = new EventEmitter<MenuItem>();

  constructor(private resolver: ComponentFactoryResolver) {  }

  didMenuItemSelect(menuItem: MenuItem) {
    this.dynamicContainer.clear();
    const factory = this.resolver.resolveComponentFactory(MenuItemComponent);
    const compRef = this.dynamicContainer.createComponent(factory);
    compRef.instance.label = 'boo';
    compRef.instance.iconClass = 'icon-home2';
    compRef.instance.select.subscribe(this.didMenuItemSelect.bind(this));

    this.select.next(menuItem);
    this.vm.selectNext();
  }

  get vm(): MenuModel {
    const menuItems = this.menuItems || this.contentItemComponents.toArray();

    return MenuModel.create(menuItems);
  }

  ngAfterContentInit() {
    this.contentItemComponents.forEach(menuItem => {
      menuItem.select.subscribe(this.didMenuItemSelect.bind(this));
    });
  }

  ngOnDestroy() {
  }
}
