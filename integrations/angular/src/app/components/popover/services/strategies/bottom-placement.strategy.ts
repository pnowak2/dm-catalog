import { constants } from './../../constants/constants';
import { PlacementOptions } from './../../interface/placement-options';
import { Offset } from './../../../../shared/geometry/model/offset';
import { PlacementStrategy } from './../../interface/placement-strategy';

import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';

import { PopoverVM } from './../../viewmodel/popover.viewmodel';

export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'bottom';
  }

  calculate(placementOptions: PlacementOptions): PopoverVM {
    const positionedPopoverRect = this.placementService.place({
      anchor: placementOptions.anchorRect,
      element: placementOptions.popoverRect,
      placementId: this.getId(),
      offsetAlong: constants.offset
    });
    const arrowOffset = getArrowOffset(
      placementOptions.anchorRect,
      positionedPopoverRect
    );
    const placementClassModifier = getPlacementClassModifier(
      placementOptions.anchorRect,
      positionedPopoverRect,
      placementOptions.arrowRect
    );
    const popoverPosition = positionedPopoverRect.position();

    return PopoverVM.create({
      popoverPosition, arrowOffset, placementClassModifier
    });
  }
}

function getMaxArrowOffset(popoverRect: Rectangle, arrowRect: Rectangle): number {
  return (popoverRect.width - arrowRect.width) / 2;
}

function getArrowOffset(anchorRect: Rectangle, popoverRect: Rectangle): Offset {
  const offsetX = anchorRect.center().x - popoverRect.center().x;
  const offsetY = 0;

  return Offset.create(offsetX, offsetY);
}

function isArrowTooFar(anchorRect: Rectangle, popoverRect: Rectangle, arrowRect: Rectangle): boolean {
  const arrowOffset = getArrowOffset(anchorRect, popoverRect);
  const maxOffset = getMaxArrowOffset(popoverRect, arrowRect);
  const isTooFar = Math.abs(arrowOffset.x) >= maxOffset;

  return isTooFar;
}

function isFlipped(anchorRect: Rectangle, popoverRect: Rectangle): boolean {
  return popoverRect.isAbove(anchorRect.center());
}

function getPlacementClassModifier(anchorRect: Rectangle, popoverRect: Rectangle, arrowRect: Rectangle): string {
  const isFlip = isFlipped(anchorRect, popoverRect);
  const isTooFar = isArrowTooFar(anchorRect, popoverRect, arrowRect);

  if (isTooFar) {
    return constants.directionClass.none;
  }

  return isFlip ? constants.directionClass.top : constants.directionClass.bottom;
}
