import { Component, OnInit } from '@angular/core';
import { MenuItem } from './../../components/menu/menu-item/model/menu-item';

@Component({
  selector: 'dm-menu-demo',
  templateUrl: './menu-demo.component.html',
  styleUrls: ['./menu-demo.component.scss']
})
export class MenuDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  didSelectItem(menuItem: MenuItem) {
    console.log(menuItem);
  }

}
