import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';
import * as mezr from 'mezr';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html'
})
export class PopoverComponent implements OnDestroy {
  @ViewChild('popoverContainer') popoverContainer: ElementRef;

  @ViewChild('popoverArrow') popoverArrow: ElementRef;

  @Input() title;

  @Input() placement: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

  @Input() showCloseIcon = false;

  @Output() onBeforeShow: EventEmitter<any> = new EventEmitter();

  @Output() onAfterShow: EventEmitter<any> = new EventEmitter();

  @Output() onBeforeHide: EventEmitter<any> = new EventEmitter();

  @Output() onAfterHide: EventEmitter<any> = new EventEmitter();

  isVisible = false;

  effectivePlacement: string;

  lastTriggerElement: HTMLElement;

  constructor(private el: ElementRef) { }

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
    let triggerElement: HTMLElement = event.target;

    if (this.lastTriggerElement === triggerElement) {
      this.isVisible ? this.hide(event) : this.show(event);
    } else {
      this.show(event);
    }

    this.lastTriggerElement = triggerElement;
  }

  show(event) {
    let popoverContainerElement: HTMLElement = this.popoverContainer.nativeElement;
    let triggerElement: HTMLElement = event.target;

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

  getEffectivePosition(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement): any {
    return mezr.place({
      element: popoverContainerElement,
      target: triggerElement,
      position: 'center top center bottom',
      offsetY: 15,
      contain: {
        onOverflow: 'none'
      }
    });
  }

  getEffectivePlacement(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement): string {
    const effectivePosition = this.getEffectivePosition(
      desiredPlacement,
      popoverContainerElement,
      triggerElement
    );

    return desiredPlacement;
  }

  position(popoverContainerElement: HTMLElement, triggerElement: HTMLElement) {
    let effectivePosition = this.getEffectivePosition(
      this.placement,
      popoverContainerElement,
      triggerElement
    );

    this.effectivePlacement = this.getEffectivePlacement(
      this.placement,
      popoverContainerElement,
      triggerElement
    );

    popoverContainerElement.style.top = effectivePosition.top + 'px';
    popoverContainerElement.style.left = effectivePosition.left + 'px';
  }

  ngOnDestroy() {
    this.lastTriggerElement = null;
  }
}
