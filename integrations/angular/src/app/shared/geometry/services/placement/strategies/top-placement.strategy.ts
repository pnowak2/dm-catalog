import { Rectangle } from '../../../model/rectangle';
import { PlacementOptions } from './../../../interface/placement-options';
import { PlacementStrategy } from '../../../interface/placement-strategy';

export class TopPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'top';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placedRect = element
      .clone()
      .moveTo(anchor.centerTop(), element.centerBottom())
      .translateY(-options.offset);

    if (options.flip && placedRect.overflowsTop(options.parent)) {
      placedRect.flip(anchor.center());
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
