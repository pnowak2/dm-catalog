import { Rectangle } from './../../model/rectangle';
import { RectangleFactory } from './../../factory/rectangle-factory';
import { PlacementOptions } from '../../interface/placement-options';
import { PlacementStrategy } from '../../interface/placement-strategy';

export class PlacementService {
  constructor(private placementStrategies: Array<PlacementStrategy> = []) { }

  static getEffectiveOptions(options?: PlacementOptions): PlacementOptions {
    return {
      anchor: Rectangle.empty(),
      element: Rectangle.empty(),
      placementId: 'bottom',
      parent: RectangleFactory.fromWindow(),
      offsetAlong: 0,
      offsetAcross: 0,
      constrainToParent: true,
      flip: true,
      ...options
    };
  }

  static pickPlacementStrategy(
    placementStrategies: Array<PlacementStrategy>,
    placementId: string): PlacementStrategy {

    return (placementStrategies || []).find(
      strategy => strategy.getId() === placementId
    );
  }

  place(options?: PlacementOptions): Rectangle {
    const effectiveOptions = PlacementService.getEffectiveOptions(options);
    const placementStrategy = PlacementService.pickPlacementStrategy(
      this.placementStrategies,
      effectiveOptions.placementId
    );

    if (!placementStrategy) {
      throw new Error('Placement not supported: ' + effectiveOptions.placementId);
    }

    return placementStrategy.calculate(effectiveOptions);
  }
}
