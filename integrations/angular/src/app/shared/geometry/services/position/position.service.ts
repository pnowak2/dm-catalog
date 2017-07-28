import { Injectable, Inject } from '@angular/core';
import { PLACEMENT_STRATEGY } from './../../geometry.config';
import { PlacementStrategy } from './strategies/placement.strategy';
import { Rectangle } from './../../model/rectangle';

@Injectable()
export class PositionService {
  constructor(
    @Inject(PLACEMENT_STRATEGY)
    private placementStrategies: [PlacementStrategy]) { }

  position(ref: Rectangle, element: Rectangle, placement: string): Rectangle {
    const placementStrategy: PlacementStrategy = this.pickPlacementStrategy(
      this.placementStrategies,
      placement
    );

    const placedRectangle: Rectangle = placementStrategy.calculate(
      ref,
      element
    );

    return placedRectangle;
  }

  pickPlacementStrategy(
    placementStrategies: [PlacementStrategy],
    placement: string): PlacementStrategy {

    return placementStrategies.find(
      strategy => strategy.getId() === placement
    );
  }
}
