import { Injectable } from '@angular/core';

import { PlacementService } from './../../../shared/geometry/services/placement/placement.service';
import { Popover } from './../model/popover.model';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

@Injectable()
export class PopoverService {
  constructor(private placementService: PlacementService) { }

  calculate(anchorRect: Rectangle, containerRect: Rectangle, placement: string): Popover {
    const calculatedRect: Rectangle = this.placementService.place(
      anchorRect,
      containerRect, {
        placementId: placement,
        offset: 15
      }
    );

    const p = anchorRect.relativePositionTo(calculatedRect);

    return Popover.create(
      'left',
      calculatedRect.left,
      calculatedRect.top,
      calculatedRect.width,
      p.y + anchorRect.height / 2
    );
  }
}
