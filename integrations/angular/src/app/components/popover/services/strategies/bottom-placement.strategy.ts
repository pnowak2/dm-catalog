import { PopoverVM } from './../../viewmodel/popover.viewmodel';
import { Point } from './../../../../shared/geometry/model/point';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';
import { PlacementStrategy } from '../../interface/placement-strategy';

export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'bottom';
  }

  calculate(anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): PopoverVM {
    const positionedElementRect: Rectangle = this.placementService.place(
      anchorRect,
      elementRect, {
        placementId: this.getId(),
        offsetAlong: 15
      }
    );

    const isFlipped = this.isFlipped(anchorRect, positionedElementRect);
    const anchorPosition = anchorRect.relativePositionTo(positionedElementRect);
    const positionedArrowRect = arrowRect
      .moveXTo(anchorPosition.x)
      .moveYTo(-arrowRect.height)
      .translateX((anchorRect.width / 2));

    if (isFlipped) {
      positionedArrowRect.moveYTo(positionedElementRect.height);
    }

    return PopoverVM.create(
      isFlipped ? 'top' : 'bottom',
      positionedElementRect.left,
      positionedElementRect.top,
      positionedArrowRect.left,
      positionedArrowRect.top
    );
  }

  isFlipped(anchorRect: Rectangle, positionedElementRect: Rectangle): boolean {
    return positionedElementRect.isAbove(anchorRect.leftTop());
  }
}
