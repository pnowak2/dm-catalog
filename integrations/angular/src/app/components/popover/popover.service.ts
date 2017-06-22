import { Injectable } from '@angular/core';
import * as mezr from 'mezr';

@Injectable()
export class PopoverService {
  position(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement: HTMLElement): void {
    let effectivePosition = this.getEffectivePosition(
      desiredPlacement,
      popoverContainerElement,
      triggerElement
    );

    popoverContainerElement.style.top = effectivePosition.top + 'px';
    popoverContainerElement.style.left = effectivePosition.left + 'px';
  }

  getEffectivePosition(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement): { top: number, left: number } {
    let position;
    let offsetY = 0;
    let offsetX = 0;

    popoverContainerElement.classList.remove('dm-c-popover--top');
    popoverContainerElement.classList.remove('dm-c-popover--bottom');
    popoverContainerElement.classList.remove('dm-c-popover--left');
    popoverContainerElement.classList.remove('dm-c-popover--right');
    popoverContainerElement.classList.add(`dm-c-popover--${desiredPlacement}`);

    if (desiredPlacement === 'bottom') {
      position = 'center top center bottom';
      offsetY = 15;
    } else if (desiredPlacement === 'top') {
      position = 'center bottom center top';
      offsetY = -15;
    } else if (desiredPlacement === 'left') {
      position = 'right center left center';
      offsetX = -15;
    } else if (desiredPlacement === 'right') {
      position = 'left center right center';
      offsetX = 15;
    }

    return mezr.place({
      element: popoverContainerElement,
      target: triggerElement,
      position: position,
      offsetY: offsetY,
      offsetX: offsetX,
      contain: {
        within: window,
        onOverflow: 'none'
      },
      adjust: function (position, data) {
        if (data.overflow.bottom > 0) {
          popoverContainerElement.classList.remove(`dm-c-popover--bottom`);
          popoverContainerElement.classList.add(`dm-c-popover--top`);

          position.top -= mezr.height(popoverContainerElement) + mezr.height(triggerElement) + (2 * 15);
        }

        if (data.overflow.top > 0) {
          popoverContainerElement.classList.remove(`dm-c-popover--top`);
          popoverContainerElement.classList.add(`dm-c-popover--bottom`);

          position.top += mezr.height(popoverContainerElement) + mezr.height(triggerElement) + (2 * 15);
        }
      }
    });
  }

}
