import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'asm-nav-category',
  templateUrl: './nav-category.component.html',
  styleUrls: ['./nav-category.component.scss']
})
export class NavCategoryComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
}
