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
      .moveTo(ref.centerTop())
      .translate(-element.width / 2, 15)
      // .flip(ref.center())
      .translateInside(RectangleFactory.fromWindow())
      .clone();;
  }
}
