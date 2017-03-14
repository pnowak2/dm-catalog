import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ux-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() hasSubitems: boolean;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

  onItemClicked(e) {
    e.preventDefault();
    if(this.hasSubitems) {

    this.isActive = !this.isActive;
    }
  }

}
