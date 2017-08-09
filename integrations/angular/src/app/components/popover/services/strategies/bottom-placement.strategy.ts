import { Popover } from './../../model/popover.model';
import { Point } from './../../../../shared/geometry/model/point';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';
import { PlacementStrategy } from '../../interface/placement-strategy';

export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'bottom';
  }

  calculate(anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): Popover {
    const positionedElementRect: Rectangle = this.placementService.place(
      anchorRect,
      elementRect, {
        placementId: this.getId(),
        offsetAlong: 15
      }
    );

    const effectivePlacement = this.getEffectivePlacement(anchorRect, positionedElementRect);
    const relativeAnchorPosition = anchorRect.relativePositionTo(positionedElementRect);

    const positionedArrowRect = arrowRect
      .moveTo(Point.create(0, 0))
      .translateX(relativeAnchorPosition.x)
      .translateX((anchorRect.width / 2))
      .translateY(-arrowRect.height);

    if (positionedElementRect.isAbove(anchorRect.leftTop())) {
      positionedArrowRect
        .moveYTo(0)
        .translateY(positionedElementRect.height);
    }

    return Popover.create(
      effectivePlacement,
      positionedElementRect.left,
      positionedElementRect.top,
      positionedArrowRect.left,
      positionedArrowRect.top
    );
  }

  getEffectivePlacement(anchorRect: Rectangle, positionedElementRect: Rectangle): string {
    if (positionedElementRect.isAbove(anchorRect.leftTop())) {
      return 'top';
    }

    return this.getId();
  }
}
