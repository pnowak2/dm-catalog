import { Rectangle } from '../../../model/rectangle';
import { PlacementOptions } from './../../../interface/placement-options';
import { PlacementStrategy } from '../../../interface/placement-strategy';

export class BottomPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'bottom';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placedRect = element
      .clone()
      .moveTo(anchor.centerBottom(), element.centerTop())
      .translateY(options.offsetAlong)
      .translateX(options.offsetAcross);

    if (options.flip && placedRect.overflowsBottom(options.parent)) {
      placedRect.flipX(anchor.center().y);
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
