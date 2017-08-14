import { Rectangle } from '../../../model/rectangle';
import { PlacementOptions } from './../../../interface/placement-options';
import { PlacementStrategy } from '../../../interface/placement-strategy';

export class TopPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'top';
  }

  calculate(options: PlacementOptions): Rectangle {
    const placedRect = options.element
      .clone()
      .moveTo(options.anchor.centerTop(), options.element.centerBottom())
      .translateY(-options.offsetAlong)
      .translateX(options.offsetAcross);

    if (options.flip && placedRect.overflowsTop(options.parent)) {
      placedRect.flipX(options.anchor.center().y);
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
