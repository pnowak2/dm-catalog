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
    const positioned = element
      .moveTo(ref.x, ref.y)
      .flipX(ref.top)
      .translateInside(RectangleFactory.htmlWindow())
      .clone();

    return positioned;
  }
}
