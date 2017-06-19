import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener } from '@angular/core';
import * as positions from 'positions';

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

  isVisible = false;

  constructor(private el: ElementRef) { }

  ngOnInit() {

  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      // this.hide(event);
    }
  }

  onCloseClick(event) {
    this.hide(event);
  }

  show(event) {
    let popoverContainerElement = this.popoverContainer.nativeElement;
    let triggerElement = event.currentTarget || event.target;

    this.onBeforeShow.emit(null);

    this.position(popoverContainerElement, triggerElement);
    this.isVisible = true;

    this.onAfterShow.emit(null);
  }

  hide(event) {
    this.onBeforeHide.emit(null);
    this.isVisible = false;
    this.onAfterHide.emit(null);
  }

  toggle(event) {
    if(this.isVisible) {
      this.hide(event);
    } else {
      this.show(event);
    }
  }

  position(popoverContainerElement, triggerElement) {
    let p = positions(
      popoverContainerElement,
      'left center',
      triggerElement,
      'right center'
    );

    popoverContainerElement.style.top = p.top + 'px';
    popoverContainerElement.style.left = p.left + 15 + 'px';
  }
}
