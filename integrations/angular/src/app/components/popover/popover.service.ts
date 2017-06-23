import { Injectable } from '@angular/core';
import * as mezr from 'mezr';

@Injectable()
export class PopoverService {
  position(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement: HTMLElement, popoverArrow: HTMLElement): void {
    this.clearPlacementCss(popoverContainerElement);
    this.addPlacementCss(desiredPlacement, popoverContainerElement);

    let effectivePosition = this.getEffectivePosition(
      desiredPlacement,
      popoverContainerElement,
      triggerElement,
      popoverArrow
    );

    this.updateContainerCoordinates(popoverContainerElement, effectivePosition);
  }

  getEffectivePosition(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement: HTMLElement, popoverArrow: HTMLElement): { top: number, left: number } {
    let { position, offsetX, offsetY } = this.calculatePositionConfiguration(desiredPlacement);

    // should have different strategies for onOverflow while top/bottom or left/right
    return mezr.place({
      element: popoverContainerElement,
      target: triggerElement,
      position: position,
      offsetY: offsetY,
      offsetX: offsetX,
      contain: {
        within: window,
        onOverflow: {
          left: 'push',
          right: 'push',
          top: 'none',
          bottom: 'none'
        }
      },
      adjust: function (position, data) {
        popoverArrow.style['margin-left'] = -(mezr.width(popoverArrow) / 2) + 'px';

        if (desiredPlacement === 'bottom') {
          if (data.overflow.bottom > 0) {
            popoverContainerElement.classList.remove(`dm-c-popover--bottom`);
            popoverContainerElement.classList.add(`dm-c-popover--top`);

            position.top -= mezr.height(popoverContainerElement) + mezr.height(triggerElement) + (2 * 15);
          }

          if (data.overflowCorrection.left > 0) {
            popoverArrow.style['margin-left'] = -data.overflowCorrection.left - 6 + 'px';
          }

          if (data.overflowCorrection.left < 0) {
            popoverArrow.style['margin-left'] = -data.overflowCorrection.left - 6 + 'px';
          }
        }

        if (desiredPlacement === 'top') {
          if (data.overflow.top > 0) {
            popoverContainerElement.classList.remove(`dm-c-popover--top`);
            popoverContainerElement.classList.add(`dm-c-popover--bottom`);

            position.top += mezr.height(popoverContainerElement) + mezr.height(triggerElement) + (2 * 15);
          }

          if (data.overflowCorrection.left > 0) {
            popoverArrow.style['margin-left'] = -data.overflowCorrection.left - 6 + 'px';
          }

          if (data.overflowCorrection.left < 0) {
            popoverArrow.style['margin-left'] = -data.overflowCorrection.left - 6 + 'px';
          }
        }

        if (desiredPlacement === 'left') {
          if (data.overflow.left > 0) {
            popoverContainerElement.classList.remove(`dm-c-popover--left`);
            popoverContainerElement.classList.add(`dm-c-popover--right`);

            position.left += mezr.width(popoverContainerElement) + mezr.width(triggerElement) + (2 * 15);
          }
        }

        if (desiredPlacement === 'right') {
          if (data.overflow.right > 0) {
            popoverContainerElement.classList.remove(`dm-c-popover--right`);
            popoverContainerElement.classList.add(`dm-c-popover--left`);

            position.left -= mezr.width(popoverContainerElement) + mezr.width(triggerElement) + (2 * 15);
          }
        }
      }
    });
  }

  clearPlacementCss(popoverContainerElement: HTMLElement): void {
    popoverContainerElement.classList.remove('dm-c-popover--top');
    popoverContainerElement.classList.remove('dm-c-popover--bottom');
    popoverContainerElement.classList.remove('dm-c-popover--left');
    popoverContainerElement.classList.remove('dm-c-popover--right');
  }

  calculatePositionConfiguration(desiredPlacement: string): { position: string, offsetX: number, offsetY: number } {
    let position;
    let offsetY = 0;
    let offsetX = 0;

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

    return {
      position,
      offsetX,
      offsetY
    }
  }

  addPlacementCss(desiredPlacement: string, popoverContainerElement: HTMLElement): void {
    popoverContainerElement.classList.add(`dm-c-popover--${desiredPlacement}`);
  }

  updateContainerCoordinates(popoverContainerElement: HTMLElement, effectivePosition: { top: number, left: number }): void {
    popoverContainerElement.style.top = effectivePosition.top + 'px';
    popoverContainerElement.style.left = effectivePosition.left + 'px';
  }
}
