import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent implements OnInit {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @Input() title;

  @Input() showCloseIcon = false;

  @Output() onBeforeShow: EventEmitter<any> = new EventEmitter();

  @Output() onAfterShow: EventEmitter<any> = new EventEmitter();

  @Output() onBeforeHide: EventEmitter<any> = new EventEmitter();

  @Output() onAfterHide: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  show(event) {
    let elementTarget = event.currentTarget || event.target;
  }

  hide() {
  }
}
