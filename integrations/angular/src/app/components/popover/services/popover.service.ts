import { Injectable } from '@angular/core';

import { PlacementStrategy } from '../interface/placement-strategy';
import { PopoverVM } from './../viewmodel/popover.viewmodel';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

export interface PlacementOptions {
  placement: string;
  anchorRect: Rectangle;
  popoverRect: Rectangle;
  arrowRect: Rectangle;
}

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

  calculate(placementOptions: PlacementOptions): PopoverVM {
    const placementStrategy = PopoverService.pickPlacementStrategy(
      this.placementStrategies,
      placementOptions.placement
    );

    if (!placementStrategy) {
      throw new Error('Placement not supported: ' + placementOptions.placement);
    }

    return placementStrategy.calculate(placementOptions);
  }
}
