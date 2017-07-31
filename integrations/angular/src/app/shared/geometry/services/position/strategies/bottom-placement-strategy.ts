import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy, PlacementOptions } from './placement.strategy';

export class BottomPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'bottom';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placedRect = element
      .clone()
      .moveTo(anchor.centerBottom(), element.centerTop())
      .translateY(options.offset);

    if (options.flip && placedRect.overflowsBottom(options.parent)) {
      placedRect.flip(anchor.center());
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
