import { Injectable } from '@angular/core';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy, PlacementOptions } from './placement.strategy';

@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {

  getId() {
    return 'bottom';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const placedRect = element
      .clone()
      .moveTo(anchor.centerBottom())
      .translateX(-element.width / 2)
      .translateY(options.offset);

    if (options.flip && placedRect.overflow(options.parent).bottom) {
      placedRect.flip(anchor.center());
    }

    if (options.constrainToParent) {
      placedRect.translateInside(options.parent);
    }

    return placedRect;
  }
}
