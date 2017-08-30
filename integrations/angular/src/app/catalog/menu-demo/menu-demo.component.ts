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
      MenuItem.create('1', 'dynamic item 1'),
      MenuItem.create('2', 'dynamic item 2'),
      MenuItem.create('3', 'dynamic item 3')
    ];
  }

  didSelectItem(menuItem: MenuItem) {
    console.log(menuItem);
  }

  didClickReloadMenuitems(evt) {
    this.menuItems = [
      MenuItem.create(Math.random() + '', 'dynamic item' + Math.random()),
      MenuItem.create(Math.random() + '', 'dynamic item' + Math.random()),
      MenuItem.create(Math.random() + '', 'dynamic item' + Math.random()),
      MenuItem.create(Math.random() + '', 'dynamic item' + Math.random()),
      MenuItem.create(Math.random() + '', 'dynamic item' + Math.random())
    ];
  }

}
