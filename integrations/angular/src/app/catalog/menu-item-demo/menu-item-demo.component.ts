import { MenuItem } from './../../components/menu/menu-item/interface/menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dm-menu-item-demo',
  templateUrl: './menu-item-demo.component.html',
  styleUrls: ['./menu-item-demo.component.scss']
})
export class MenuItemDemoComponent implements OnInit {
  mi: MenuItem = {
    id: 'id',
    label: 'sie ma'
  }
  
  constructor() { }

  ngOnInit() {
  }

  didMenuSelect(menuItem: MenuItem) {
    console.log(menuItem);
  }

}
