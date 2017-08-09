import { Popover } from './../../model/popover.model';
import { Point } from './../../../../shared/geometry/model/point';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';
import { PlacementStrategy } from '../../interface/placement-strategy';

export class LeftPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'left';
  }

  calculate(anchorRect: Rectangle, containerRect: Rectangle, arrowRect: Rectangle): Popover {
    const calculatedRect: Rectangle = this.placementService.place(
      anchorRect,
      containerRect, {
        placementId: 'left',
        offsetAlong: 15
      }
    );

    const anchorRelativePosition = anchorRect.relativePositionTo(calculatedRect);

    let effectivePlacement: string;
    let arrowPoint: Point;

    if (calculatedRect.isOnTheLeft(anchorRect.leftTop())) {
      effectivePlacement = 'left';
      arrowPoint = Point.create(
        calculatedRect.width,
        anchorRelativePosition.y + anchorRect.height / 2
      );
    } else {
      effectivePlacement = 'right';
      arrowPoint = Point.create(
        -anchorRect.width / 2,
        anchorRelativePosition.y + anchorRect.height / 2
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
