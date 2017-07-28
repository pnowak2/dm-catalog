import { Injectable } from '@angular/core';
import { RectangleFactory } from './../../../factory/rectangle-factory';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy } from './placement.strategy';

@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {

  getId() {
    return 'bottom';
  }

  calculate(anchor: Rectangle, element: Rectangle): Rectangle {
    return element
      .clone()
      .moveTo(anchor.centerBottom())
      .translateX(-element.width / 2)
      .translateY(15)
      .flip(anchor.center())
      .translateInside(RectangleFactory.fromWindow());
  }
}
