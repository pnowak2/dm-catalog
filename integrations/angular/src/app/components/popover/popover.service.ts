import { Injectable } from '@angular/core';
import * as mezr from 'mezr';

@Injectable()
export class PopoverService {
  position(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement: HTMLElement): string {
    let effectivePosition = this.getEffectivePosition(
      desiredPlacement,
      popoverContainerElement,
      triggerElement
    );

    popoverContainerElement.style.top = effectivePosition.top + 'px';
    popoverContainerElement.style.left = effectivePosition.left + 'px';

    let effectivePlacement = this.getEffectivePlacement(
      desiredPlacement,
      popoverContainerElement,
      triggerElement
    );

    return effectivePlacement;
  }

  getEffectivePosition(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement): { top: number, left: number } {
    let position;
    let offsetY;

    if (desiredPlacement === 'bottom') {
      position = 'center top center bottom';
      offsetY = 15;
    } else if (desiredPlacement === 'top') {
      position = 'center bottom center top';
      offsetY = -15;
    }

    return mezr.place({
      element: popoverContainerElement,
      target: triggerElement,
      position: position,
      offsetY: offsetY,
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
}
