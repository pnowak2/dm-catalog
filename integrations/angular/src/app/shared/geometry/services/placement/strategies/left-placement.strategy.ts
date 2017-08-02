import { Rectangle } from '../../../model/rectangle';
import { PlacementOptions } from './../../../interface/placement-options';
import { PlacementStrategy } from '../../../interface/placement-strategy';

export class LeftPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'left';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placedRect = element
      .clone()
      .moveTo(anchor.leftCenter(), element.rightCenter())
      .translateX(-options.offset);

    if (options.flip && placedRect.overflowsLeft(options.parent)) {
      placedRect.flip(anchor.center());
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
