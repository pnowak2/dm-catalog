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

  constructor() { }

  ngOnInit() {
  }

}
