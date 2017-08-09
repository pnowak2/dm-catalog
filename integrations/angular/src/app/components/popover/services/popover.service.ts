import { Injectable } from '@angular/core';

import { PlacementStrategy } from '../interface/placement-strategy';
import { Popover } from './../model/popover.model';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

@Injectable()
export class PopoverService {
  constructor(private placementStrategies: Array<PlacementStrategy>) { }

  static pickPlacementStrategy(
    placementStrategies: Array<PlacementStrategy>,
    placementId: string): PlacementStrategy {

    return (placementStrategies || []).find(
      strategy => strategy.getId() === placementId
    );
  }

  calculate(placement: string, anchorRect: Rectangle, containerRect: Rectangle, arrowRect: Rectangle): Popover {
    const placementStrategy = PopoverService.pickPlacementStrategy(
      this.placementStrategies,
      placement
    );

    if (!placementStrategy) {
      throw new Error('Placement not supported: ' + placement);
    }

    return placementStrategy.calculate(anchorRect, containerRect, arrowRect);

  }
}
