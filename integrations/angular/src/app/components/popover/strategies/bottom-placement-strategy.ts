import { Injectable } from '@angular/core';
import { Position, Rectangle, PlacementStrategy } from '../services/interfaces';
import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { BoxService } from '../services/box.service';

@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(
    private boxService: BoxService) { }

  getId() {
    return "bottom";
  }

  calculate(trigger: Rectangle, element: Rectangle): Position {
    let position: Position = this.boxService.calculateBottomCenterPosition(
      trigger,
      element
    );

    const intersection = this.boxService.calculateIntersection(
      SimpleBox.create(position, element.dimensions),
      WindowBox.create(window)
    );

    if (intersection.bottom < 0) {
      position = {
        ...position,
        top: trigger.position.top - element.dimensions.height
      }
    }

    position = this.boxService.calculatePlacementInsideParent(
      SimpleBox.create(position, element.dimensions),
      WindowBox.create(window)
    );

    return position;
  }
}
