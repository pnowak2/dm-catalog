import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'asm-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() title: string;
  @Input() icon: string;
  @Input() hasSubitems: boolean;
  @Input() isOpened: boolean;

  constructor() { }

  ngOnInit() {
  }

  onItemClicked(e) {
    e.preventDefault();
    if(this.hasSubitems) {

    this.isOpened = !this.isOpened;
    }
  }

}
