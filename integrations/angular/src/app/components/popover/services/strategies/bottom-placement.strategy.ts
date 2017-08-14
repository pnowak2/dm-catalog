import { element } from 'protractor';
import { PlacementOptions } from './../../interface/placement-options';
import { constants } from './../../constants/constants';
import { Point } from './../../../../shared/geometry/model/point';
import { Position } from './../../../../shared/geometry/interface/position';
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
    const positionedRect: Rectangle = this.placementService.place({
      anchor: anchorRect,
      element: popoverRect,
      placementId: this.getId(),
      offsetAlong: constants.offset
    });

    return positionedRect;
  }

  getArrowOffset(anchorRect: Rectangle, popoverRect: Rectangle): Offset {
    const offsetX = anchorRect.center().x - popoverRect.center().x;
    const offsetY = 0;

    return Offset.create(offsetX, offsetY);
  }

  getPlacementClassModifier(anchorRect: Rectangle, popoverRect: Rectangle, arrowRect: Rectangle): string {
    const isFlipped = popoverRect.isAbove(anchorRect.center());
    const arrowOffset = this.getArrowOffset(anchorRect, popoverRect);
    const maxOffset = (popoverRect.width / 2) - (arrowRect.width);
    const isArrowTooFar = Math.abs(arrowOffset.x) >= maxOffset;

    if (isArrowTooFar) {
      return 'no-direction';
    }

    return isFlipped ? 'top' : 'bottom';
  }
}
