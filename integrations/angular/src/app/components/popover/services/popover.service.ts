import { Point } from './../../../shared/geometry/model/point';
import { Injectable } from '@angular/core';

import { PlacementService } from './../../../shared/geometry/services/placement/placement.service';
import { Popover } from './../model/popover.model';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

@Injectable()
export class PopoverService {
  constructor(private placementService: PlacementService) { }

  calculate(placement: string, anchorRect: Rectangle, containerRect: Rectangle, arrowRect: Rectangle): Popover {
    const calculatedRect: Rectangle = this.placementService.place(
      anchorRect,
      containerRect, {
        placementId: placement,
        offset: 15
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
    }

    if (calculatedRect.isBelow(anchorRect.leftBottom())) {
      effectivePlacement = 'bottom';
      arrowPoint = Point.create(
        anchorRelativePosition.x + anchorRect.width / 2,
        -arrowRect.height
      );
    }

    if (calculatedRect.isOnTheLeft(anchorRect.leftTop())) {
      effectivePlacement = 'left';
      arrowPoint = Point.create(
        calculatedRect.width,
        anchorRelativePosition.y + anchorRect.height / 2
      );
    }

    if (calculatedRect.isOnTheRight(anchorRect.rightTop())) {
      effectivePlacement = 'right';
      arrowPoint = Point.create(
        -arrowRect.width,
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
