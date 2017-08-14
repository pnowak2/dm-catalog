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

  calculate(anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): PopoverVM {
    const positionedPopoverRect = this.getPositionedPopoverRect(anchorRect, elementRect);

    const popoverPosition = positionedPopoverRect.position();
    const arrowOffset = this.getArrowOffset(anchorRect, positionedPopoverRect);
    const placementClassModifier = this.getPlacementClassModifier(anchorRect, positionedPopoverRect);

    return PopoverVM.create({
      popoverPosition, arrowOffset, placementClassModifier
    });
  }

  getPositionedPopoverRect(anchorRect: Rectangle, popoverRect: Rectangle): Rectangle {
    const positionedRect: Rectangle = this.placementService.place(
      anchorRect,
      popoverRect, {
        placementId: this.getId(),
        offsetAlong: constants.offset
      }
    );

    return positionedRect;
  }

  getArrowOffset(anchorRect: Rectangle, popoverRect: Rectangle): Offset {
    const offsetX = anchorRect.position().x - popoverRect.center().x;
    const offsetY = 0;

    return Offset.create(offsetX, offsetY);
  }

  getPlacementClassModifier(anchorRect: Rectangle, popoverRect: Rectangle): string {
    const isFlipped = popoverRect.isAbove(anchorRect.leftTop());

    return isFlipped ? 'top' : 'bottom';
  }
}
