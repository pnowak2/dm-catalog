import { Injectable } from '@angular/core';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy } from './placement.strategy';

@Injectable()
export class RightPlacementStrategy implements PlacementStrategy {

  getId() {
    return 'right';
  }

  calculate(anchor: Rectangle, element: Rectangle, parent: Rectangle): Rectangle {
    return element
      .clone()
      .moveTo(anchor.rightCenter())
      .translateY(-element.height / 2)
      .translateX(15)
      .flip(anchor.center())
      .translateInside(parent);
  }
}
