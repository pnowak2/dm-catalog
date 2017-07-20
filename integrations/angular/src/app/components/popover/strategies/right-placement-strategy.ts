import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { Injectable } from '@angular/core';
import { Position, Box, PlacementStrategy } from '../services/interfaces';

@Injectable()
export class RightPlacementStrategy extends PlacementStrategy {

  getId() {
    return "right";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top - element.dimension.height / 2 + trigger.dimension.height / 2;
    position.left = trigger.position.left + trigger.dimension.width + this.offset;

    return position;
  }
}
