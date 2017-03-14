import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ux-nav-category',
  templateUrl: './nav-category.component.html'
})
export class NavCategoryComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
}
