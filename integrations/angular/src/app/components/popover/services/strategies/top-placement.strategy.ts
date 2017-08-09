import { Popover } from './../../model/popover.model';
import { Point } from './../../../../shared/geometry/model/point';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';
import { PlacementStrategy } from '../../interface/placement-strategy';

export class TopPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'top';
  }

  calculate(anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): Popover {
    const calculatedRect: Rectangle = this.placementService.place(
      anchorRect,
      elementRect, {
        placementId: this.getId(),
        offsetAlong: 15
      }
    );

    const anchorRelativePosition = anchorRect.relativePositionTo(calculatedRect);

    let effectivePlacement: string;
    let arrowPoint: Point;

    if (calculatedRect.isBelow(anchorRect.leftTop())) {
      effectivePlacement = 'bottom';
      arrowPoint = Point.create(
        anchorRelativePosition.x + anchorRect.width / 2,
        -anchorRect.height / 2
      );
    } else {
      effectivePlacement = 'top';
      arrowPoint = Point.create(
        anchorRelativePosition.x + anchorRect.width / 2,
        calculatedRect.height
      );
    }

    return Popover.create(
      effectivePlacement,
      calculatedRect.left,
      calculatedRect.top,
      arrowPoint.x,
      arrowPoint.y
    );
  }
}
