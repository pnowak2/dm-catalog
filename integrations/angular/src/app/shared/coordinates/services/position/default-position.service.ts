import { Injectable, Inject } from '@angular/core';
import { PLACEMENT_STRATEGY } from './../../coordinates.config';
import { PlacementStrategy } from './strategies/placement.strategy';
import { PositionService } from './position.service';
import { Rectangle } from './../../interfaces/rectangle';

@Injectable()
export class DefaultPositionService implements PositionService {
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
