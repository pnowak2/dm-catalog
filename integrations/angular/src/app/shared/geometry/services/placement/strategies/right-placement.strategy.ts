import { Rectangle } from '../../../model/rectangle';
import { PlacementOptions } from './../../../interface/placement-options';
import { PlacementStrategy } from '../../../interface/placement-strategy';

export class RightPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'right';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placedRect = element
      .clone()
      .moveTo(anchor.rightCenter(), element.leftCenter())
      .translateX(options.offsetAlong)
      .translateY(options.offsetAcross);

    if (options.flip && placedRect.overflowsRight(options.parent)) {
      placedRect.flipY(anchor.center().x);
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
