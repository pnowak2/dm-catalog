import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { MenuComponent } from '../menu/menu/menu.component';

@Component({
  selector: 'dm-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit, AfterContentInit {
  @Input() visible: boolean;
  @ContentChild(MenuComponent) menuComponent: MenuComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.menuComponent.select.subscribe((i) => {
      console.log('autocomplete clicked', i);
      this.visible = false;
    })
  }

  didClickInput(evt: MouseEvent) {
    this.visible = !this.visible;
  }

}
