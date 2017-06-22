import { Injectable } from '@angular/core';
import * as mezr from 'mezr';

@Injectable()
export class PopoverService {
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
}
