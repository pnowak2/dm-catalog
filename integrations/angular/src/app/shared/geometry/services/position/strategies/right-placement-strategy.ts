import { Injectable } from '@angular/core';
import { Point } from './../../../model/point';
import { RectangleFactory } from './../../../factory/rectangle-factory';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy } from './placement.strategy';

@Injectable()
export class RightPlacementStrategy implements PlacementStrategy {

  getId() {
    return 'right';
  }

  calculate(ref: Rectangle, element: Rectangle): Rectangle {
    return element
      .clone()
      .moveTo(ref.rightCenter())
      .translateY(-element.height / 2)
      .translateX(15)
      // .flip(ref.center())
      .translateInside(RectangleFactory.fromWindow());
  }
}
