import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ux-nav-link',
  templateUrl: './nav-link.component.html'
})
export class NavLinkComponent implements OnInit {
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();
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
      this.toggle.next(this.isActive);
    }
  }
}
