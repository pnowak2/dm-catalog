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

    const p = anchorRect.relativePositionTo(calculatedRect);

    return Popover.create(
      calculatedRect.isAbove(anchorRect.leftTop()) ? "top" : "bottom",
      calculatedRect.left,
      calculatedRect.top,
      p.x + anchorRect.width / 2,
      calculatedRect.isAbove(anchorRect.leftTop()) ? calculatedRect.height : -arrowRect.height
    );
  }
}
