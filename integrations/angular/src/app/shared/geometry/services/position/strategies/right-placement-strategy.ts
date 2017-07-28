import { Injectable } from '@angular/core';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy, PlacementOptions } from './placement.strategy';

@Injectable()
export class RightPlacementStrategy implements PlacementStrategy {
  getId() {
    return 'right';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placedRect = element
      .clone()
      .moveTo(anchor.rightCenter())
      .translateY(-element.height / 2)
      .translateX(options.offset);

    if (options.flip && placedRect.overflowsRight(options.parent)) {
      placedRect.flip(anchor.center());
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
