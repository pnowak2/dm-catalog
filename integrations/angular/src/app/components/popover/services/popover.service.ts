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

    return {
      effectivePlacement: 'left',
      arrowPosition: {
        top: p.y + anchorRect.height / 2,
        left: calculatedRect.width
      },
      containerPosition: {
        top: calculatedRect.top,
        left: calculatedRect.left
      }
    };
  }
}
