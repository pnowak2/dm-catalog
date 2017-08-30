import { Component, OnInit } from '@angular/core';
import { MenuItem } from './../../components/menu/menu-item/model/menu-item';

@Component({
  selector: 'dm-menu-demo',
  templateUrl: './menu-demo.component.html',
  styleUrls: ['./menu-demo.component.scss']
})
export class MenuDemoComponent implements OnInit {
  menuItems: Array<MenuItem>;

  ngOnInit() {
    this.menuItems = [
      MenuItem.create({
        id: '1',
        label: 'dynamic item 1',
        iconClass: 'icon-home'
      }),
      MenuItem.create({
        id: '2',
        label: 'dynamic item 2'
      }),
      MenuItem.create({
        id: '3',
        label: 'dynamic item 3'
      })
    ];
  }

  didSelectItem(menuItem: MenuItem) {
    console.log(menuItem);
  }

  didClickReloadMenuitems(evt) {
    this.menuItems = [
      MenuItem.create({
        id: 'g',
        label: 'generated item'
      }),
    ];
  }

}
