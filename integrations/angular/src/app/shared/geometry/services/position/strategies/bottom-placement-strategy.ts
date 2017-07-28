import { Injectable } from '@angular/core';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy, PlacementOptions } from './placement.strategy';

@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {

  getId() {
    return 'bottom';
  }

  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    return element
      .clone()
      .moveTo(anchor.centerBottom())
      .translateX(-element.width / 2)
      .translateY(15)
      .flip(anchor.center())
      .translateInside(options.parent);
  }
}
