import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dm-menu-header',
  templateUrl: './menu-header.component.html'
})
export class MenuHeaderComponent implements OnInit {
  @Input() title;
  
  constructor() { }

  ngOnInit() {
  }

}
