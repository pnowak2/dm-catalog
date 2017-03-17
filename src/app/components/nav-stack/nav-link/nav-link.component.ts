import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ux-nav-link',
  templateUrl: './nav-link.component.html'
})
export class NavLinkComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() hasSubitems: boolean;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onClicked(e) {
    e.preventDefault();
    if (this.hasSubitems) {
      this.isActive = !this.isActive;
    }
  }
}
