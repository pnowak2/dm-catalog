import { Injectable } from '@angular/core';

import { PlacementStrategy } from '../interface/placement-strategy';
import { PopoverVM } from './../viewmodel/popover.viewmodel';
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

  calculate(placement: string, anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): PopoverVM {
    const placementStrategy = PopoverService.pickPlacementStrategy(
      this.placementStrategies,
      placement
    );

    if (!placementStrategy) {
      throw new Error('Placement not supported: ' + placement);
    }

    return placementStrategy.calculate(anchorRect, elementRect, arrowRect);
  }
}
