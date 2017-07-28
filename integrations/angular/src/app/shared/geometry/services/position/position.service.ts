import { Injectable, Inject } from '@angular/core';
import { PLACEMENT_STRATEGY } from './../../geometry.config';
import { PlacementStrategy, PlacementOptions } from './strategies/placement.strategy';
import { Rectangle } from './../../model/rectangle';

@Injectable()
export class PositionService {
  constructor(
    @Inject(PLACEMENT_STRATEGY)
    private placementStrategies: [PlacementStrategy]) { }

  position(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placementStrategy: PlacementStrategy = this.pickPlacementStrategy(
      this.placementStrategies,
      options.placement
    );

    if (!placementStrategy) {
      throw new Error('Placement not supported: ' + options.placement);
    }

    const placedRectangle: Rectangle = placementStrategy.calculate(
      anchor,
      element,
      { ...options }
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
