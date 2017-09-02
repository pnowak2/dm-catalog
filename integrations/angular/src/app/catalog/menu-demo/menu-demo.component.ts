import { Component, OnInit } from '@angular/core';
import { MenuItem } from './../../components/menu/menu-item/interface/menu-item';

@Component({
  selector: 'dm-menu-demo',
  templateUrl: './menu-demo.component.html',
  styleUrls: ['./menu-demo.component.scss']
})
export class MenuDemoComponent implements OnInit {
  menuItems: Array<MenuItem>;

  ngOnInit() {
    this.menuItems = [
      {
        id: '1',
        label: 'dynamic item 1',
        iconClass: 'icon-home'
      },
      {
        id: '2',
        label: 'dynamic item 2',
        selected: true
      },
      {
        id: '3',
        label: 'dynamic item 3',
        disabled: true
      }
    ];
  }

  didSelectItem(menuItem: MenuItem) {
    console.log(menuItem);
  }

  didClickReloadMenuitems(evt: MouseEvent) {
    this.menuItems[0].disabled = true;
    this.menuItems.push({
      id: 'g',
      label: 'generated item',
      iconClass: 'icon-home2'
    });

  }

}
