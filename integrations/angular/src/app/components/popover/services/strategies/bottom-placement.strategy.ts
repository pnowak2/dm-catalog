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

  calculate(anchorRect: Rectangle, containerRect: Rectangle, arrowRect: Rectangle): Popover {
    const calculatedRect: Rectangle = this.placementService.place(
      anchorRect,
      containerRect, {
        placementId: 'bottom',
        offsetAlong: 15
      }
    );

    const anchorRelativePosition = anchorRect.relativePositionTo(calculatedRect);

    let effectivePlacement: string;
    let arrowPoint: Point;

    if (calculatedRect.isAbove(anchorRect.leftTop())) {
      effectivePlacement = 'top';
      arrowPoint = Point.create(
        anchorRelativePosition.x + anchorRect.width / 2,
        calculatedRect.height
      );
    } else {
      effectivePlacement = 'bottom';
      arrowPoint = Point.create(
        anchorRelativePosition.x + anchorRect.width / 2,
        -anchorRect.height / 2
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
