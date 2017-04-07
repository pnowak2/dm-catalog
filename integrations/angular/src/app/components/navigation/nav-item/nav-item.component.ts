import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dm-nav-item',
  templateUrl: './nav-item.component.html'
})
export class NavItemComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onToggle(state: boolean) {
    this.isActive = state;
  }
}
