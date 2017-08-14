import { Rectangle } from '../../../model/rectangle';
import { PlacementOptions } from './../../../interface/placement-options';
import { PlacementStrategy } from '../../../interface/placement-strategy';

export class RightPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'right';
  }

  calculate(options: PlacementOptions): Rectangle {
    const placedRect = options.element
      .clone()
      .moveTo(options.anchor.rightCenter(), options.element.leftCenter())
      .translateX(options.offsetAlong)
      .translateY(options.offsetAcross);

    if (options.flip && placedRect.overflowsRight(options.parent)) {
      placedRect.flipY(options.anchor.center().x);
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
