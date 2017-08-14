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
    const positionedPopover = this.getPositionedPopover(anchorRect, elementRect);
    const placementClassModifier = this.getPlacementClassModifier(anchorRect, positionedPopover);
    const arrowOffset = this.getArrowOffset(anchorRect, positionedPopover);

    return PopoverVM.create({
      placementClassModifier: placementClassModifier,
      containerPosition: positionedPopover.position(),
      arrowOffset: arrowOffset
    });
  }

  getPositionedPopover(anchorRect: Rectangle, elementRect: Rectangle): Rectangle {
    const positionedElementRect: Rectangle = this.placementService.place(
      anchorRect,
      elementRect, {
        placementId: this.getId(),
        offsetAlong: 15
      }
    );

    return positionedElementRect;
  }

  getArrowOffset(anchorRect: Rectangle, positionedElementRect: Rectangle): Offset {
    return Offset.create(anchorRect.position().x - positionedElementRect.center().x, 0);
  }

  getPlacementClassModifier(anchorRect: Rectangle, positionedElementRect: Rectangle): string {
    const isFlipped = this.isFlipped(anchorRect, positionedElementRect);
    return isFlipped ? 'top' : 'bottom';
  }

  isFlipped(anchorRect: Rectangle, positionedElementRect: Rectangle): boolean {
    return positionedElementRect.isAbove(anchorRect.leftTop());
  }
}
