import { PlacementOptions } from './../../interface/placement-options';
import { constants } from './../../constants/constants';
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
    const positionedPopoverRect = this.getPositionedPopoverRect(
      placementOptions.anchorRect,
      placementOptions.popoverRect
    );
    const arrowOffset = this.getArrowOffset(
      placementOptions.anchorRect,
      positionedPopoverRect
    );
    const placementClassModifier = this.getPlacementClassModifier(
      placementOptions.anchorRect,
      positionedPopoverRect,
      placementOptions.arrowRect
    );
    const popoverPosition = positionedPopoverRect.position();

    return PopoverVM.create({
      popoverPosition, arrowOffset, placementClassModifier
    });
  }

  getPositionedPopoverRect(anchorRect: Rectangle, popoverRect: Rectangle): Rectangle {
    return this.placementService.place({
      anchor: anchorRect,
      element: popoverRect,
      placementId: this.getId(),
      offsetAlong: constants.offset
    });
  }

  getArrowOffset(anchorRect: Rectangle, popoverRect: Rectangle): Offset {
    const offsetX = anchorRect.center().x - popoverRect.center().x;
    const offsetY = 0;

    return Offset.create(offsetX, offsetY);
  }

  getMaxArrowOffset(popoverRect: Rectangle, arrowRect: Rectangle): number {
    return (popoverRect.width - arrowRect.width) / 2;
  }

  getPlacementClassModifier(anchorRect: Rectangle, popoverRect: Rectangle, arrowRect: Rectangle): string {
    const isFlipped = this.isFlipped(anchorRect, popoverRect);
    const arrowOffset = this.getArrowOffset(anchorRect, popoverRect);
    const maxOffset = this.getMaxArrowOffset(popoverRect, arrowRect);
    const isArrowTooFar = Math.abs(arrowOffset.x) >= maxOffset;

    if (isArrowTooFar) {
      return constants.directionClass.none;
    }

    return isFlipped ? constants.directionClass.top : constants.directionClass.bottom;
  }

  isFlipped(anchorRect: Rectangle, popoverRect: Rectangle): boolean {
    return popoverRect.isAbove(anchorRect.center());
  }
}
