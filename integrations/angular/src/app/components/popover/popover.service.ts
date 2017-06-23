import { Injectable } from '@angular/core';
import * as mezr from 'mezr';

@Injectable()
export class PopoverService {
  position(desiredPlacement: string, popoverContainerElement: HTMLElement, triggerElement: HTMLElement, popoverArrow: HTMLElement): void {
    popoverContainerElement.style.visibility = 'hidden';
    popoverContainerElement.style.display = 'block';

    let { position, offsetX, offsetY } = calculatePositionConfiguration(desiredPlacement);

    // should have different strategies for onOverflow while top/bottom or left/right
    let effectivePosition = mezr.place({
      element: popoverContainerElement,
      target: triggerElement,
      position: position,
      offsetY: offsetY,
      offsetX: offsetX,
      contain: {
        within: [window, 'padding'],
        onOverflow: {
          left: 'push',
          right: 'push',
          top: 'none',
          bottom: 'none'
        }
      },
      adjust: function (position, data) {
        adjustPlacement(position, data, desiredPlacement, popoverContainerElement, popoverArrow, triggerElement);
      }
    });

    updateContainerCoordinates(popoverContainerElement, effectivePosition);

    popoverContainerElement.style.visibility = 'visible';
    popoverContainerElement.style.display = 'none';
  }
}

const updateContainerCoordinates = (popoverContainerElement: HTMLElement, effectivePosition: { top: number, left: number }): void => {
  popoverContainerElement.style.top = effectivePosition.top + 'px';
  popoverContainerElement.style.left = effectivePosition.left + 'px';
}

const calculatePositionConfiguration = (desiredPlacement: string): { position: string, offsetX: number, offsetY: number } => {
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

const addPlacementCss = (desiredPlacement: string, popoverContainerElement: HTMLElement): void => {
  popoverContainerElement.classList.remove('dm-c-popover--top');
  popoverContainerElement.classList.remove('dm-c-popover--bottom');
  popoverContainerElement.classList.remove('dm-c-popover--left');
  popoverContainerElement.classList.remove('dm-c-popover--right');

  popoverContainerElement.classList.add(`dm-c-popover--${desiredPlacement}`);
}

const adjustPlacement = (position, data, desiredPlacement, popoverContainerElement, popoverArrow, triggerElement) => {
  popoverArrow.style['margin-left'] = '-8px';

  if (desiredPlacement === 'bottom') {
    // flip to the other side
    if (data.overflow.bottom <= 0) {
      addPlacementCss('bottom', popoverContainerElement);
    } else {
      addPlacementCss('top', popoverContainerElement);
      position.top -= mezr.height(popoverContainerElement) + mezr.height(triggerElement) + (2 * 15);
    }

    // correct arrow position
    if (data.overflowCorrection.left > 0) {
      popoverArrow.style['margin-left'] = -data.overflowCorrection.left - 8 + 'px';
    }

    if (data.overflowCorrection.left < 0) {
      popoverArrow.style['margin-left'] = -data.overflowCorrection.left - 8 + 'px';
    }
  }
}
