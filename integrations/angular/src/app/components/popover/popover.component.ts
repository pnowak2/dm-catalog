import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';
import * as positions from 'positions';
import * as domAlign from 'dom-align';
import * as mezr from 'mezr';

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

  lastTriggerElement: any;

  constructor(private el: ElementRef) { }

  ngOnInit() { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.hide(event);
    }
  }

  onCloseClick(event) {
    this.hide(event);
  }

  toggle(event) {
    let triggerElement = event.target;

    if (this.lastTriggerElement === triggerElement) {
      this.isVisible ? this.hide(event) : this.show(event);
    } else {
      this.show(event);
    }

    this.lastTriggerElement = triggerElement;
  }

  show(event) {
    let popoverContainerElement = this.popoverContainer.nativeElement;
    let triggerElement = event.target;

    this.onBeforeShow.emit(null);

    this.position(popoverContainerElement, triggerElement);
    this.isVisible = true;

    this.onAfterShow.emit(null);

    event.stopPropagation();
  }

  hide(event) {
    this.onBeforeHide.emit(null);
    this.isVisible = false;
    this.onAfterHide.emit(null);
  }

  position(popoverContainerElement, triggerElement) {
    // let p = positions(
    //   popoverContainerElement,
    //   'top center',
    //   triggerElement,
    //   'center bottom'
    // );

    // popoverContainerElement.style.top = p.top + 15 + 'px';
    // popoverContainerElement.style.left = p.left + 'px';


    // domAlign.default(popoverContainerElement, triggerElement, {
    //   points: ['tc', 'bc'],
    //   offset: [0, 15],
    //   overflow: {
    //     adjustX: false,
    //     adjustY: true
    //   },
    //   useCssTransform: true
    // });

    let m = mezr.place({
      element: popoverContainerElement,
      target: triggerElement,
      position: 'center top center bottom',
      contain: {
        onOverflow: 'none'
      },
      adjust: function (position, data) {
        position.top += 15;
      }
    });

    popoverContainerElement.style.top = m.top + 'px';
    popoverContainerElement.style.left = m.left + 'px';
  }

  ngOnDestroy() {
    this.lastTriggerElement = null;
  }
}
