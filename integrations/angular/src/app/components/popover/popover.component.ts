import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, HostListener, OnDestroy } from '@angular/core';
import { PopoverService } from './popover.service';

@Component({
  selector: 'dm-popover',
  templateUrl: './popover.component.html',
  providers: [PopoverService]
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

  constructor(private el: ElementRef, private popoverService: PopoverService) { }

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
    let desiredPlacement = this.placement;

    this.onBeforeShow.emit(null);

    this.position(desiredPlacement, popoverContainerElement, triggerElement);

    this.isVisible = true;

    this.onAfterShow.emit(null);

    event.stopPropagation();
  }

  position(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement: HTMLElement) {
    let effectivePlacement = this.popoverService.getEffectivePlacement(
      desiredPlacement,
      popoverContainerElement,
      triggerElement
    );

    let effectivePosition = this.popoverService.getEffectivePosition(
      desiredPlacement,
      popoverContainerElement,
      triggerElement
    );

    this.effectivePlacement = effectivePlacement;

    popoverContainerElement.style.top = effectivePosition.top + 'px';
    popoverContainerElement.style.left = effectivePosition.left + 'px';
  }

  hide(event) {
    this.onBeforeHide.emit(null);
    this.isVisible = false;
    this.onAfterHide.emit(null);
  }

  ngOnDestroy() {
    this.lastTriggerElement = null;
  }
}
