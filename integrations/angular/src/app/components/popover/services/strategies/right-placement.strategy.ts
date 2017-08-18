import { constants } from './../../constants/constants';
import { PlacementOptions } from './../../interface/placement-options';
import { Offset } from './../../../../shared/geometry/model/offset';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';

import { PlacementStrategy } from '../../interface/placement-strategy';
import { PopoverVM } from './../../viewmodel/popover.viewmodel';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';

export class RightPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'right';
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

function getArrowOffset(anchorRect: Rectangle, popoverRect: Rectangle): Offset {
  const offsetX = 0;
  const offsetY = anchorRect.center().y - popoverRect.center().y;

  return Offset.create(offsetX, offsetY);
}

function getMaxArrowOffset(popoverRect: Rectangle, arrowRect: Rectangle): number {
  return (popoverRect.height - arrowRect.height) / 2;
}

function isArrowTooFar(anchorRect: Rectangle, popoverRect: Rectangle, arrowRect: Rectangle): boolean {
  const arrowOffset = getArrowOffset(anchorRect, popoverRect);
  const maxOffset = getMaxArrowOffset(popoverRect, arrowRect);
  const isTooFar = Math.abs(arrowOffset.y) >= maxOffset;

  return isTooFar;
}

function getPlacementClassModifier(anchorRect: Rectangle, popoverRect: Rectangle, arrowRect: Rectangle): string {
  const isFlip = isFlipped(anchorRect, popoverRect);
  const isTooFar = isArrowTooFar(anchorRect, popoverRect, arrowRect);

  if (isTooFar) {
    return constants.directionClass.none;
  }

  return isFlip ? constants.directionClass.left : constants.directionClass.right;
}

function isFlipped(anchorRect: Rectangle, popoverRect: Rectangle): boolean {
  return popoverRect.isOnTheLeft(anchorRect.center());
}
