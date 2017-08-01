import { Rectangle } from './../../model/rectangle';
import { RectangleFactory } from './../../factory/rectangle-factory';
import { PlacementOptions } from '../../interface/placement-options';
import { PlacementStrategy } from '../../interface/placement-strategy';

export class PlacementService {
  constructor(private placementStrategies: Array<PlacementStrategy> = []) { }

  position(anchor: Rectangle, element: Rectangle, options?: PlacementOptions): Rectangle {
    const effectiveOptions = getEffectiveOptions(options);

    const placementStrategy = pickPlacementStrategy(
      this.placementStrategies,
      effectiveOptions.placementId
    );

    if (!placementStrategy) {
      throw new Error('Placement not supported: ' + effectiveOptions.placementId);
    }

    return placementStrategy.calculate(
      anchor,
      element,
      effectiveOptions
    );
  }
}

function getEffectiveOptions(options: PlacementOptions): PlacementOptions {
  return {
    placementId: 'bottom',
    parent: RectangleFactory.fromWindow(),
    offset: 0,
    constrainToParent: true,
    flip: true,
    ...options
  }
}

function pickPlacementStrategy(
  placementStrategies: Array<PlacementStrategy>,
  placementId: string): PlacementStrategy {

  return placementStrategies.find(
    strategy => strategy.getId() === placementId
  );
}
