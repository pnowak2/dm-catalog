import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent implements OnInit {
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
