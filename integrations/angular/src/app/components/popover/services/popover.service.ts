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

    return {
      effectivePosition: 'top',
      arrow: {
        top: '-10px',
        left: '10px'
      },
      container: {
        top: calculatedRect.top + 'px',
        left: calculatedRect.left + 'px'
      }
    };
  }
}