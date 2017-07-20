import { Injectable } from '@angular/core';
import { Position, Box, PlacementStrategy } from '../services/interfaces';
import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';

@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {

  getId() {
    return "bottom";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top + trigger.dimension.height;
    position.left = trigger.position.left - element.dimension.width / 2 + trigger.dimension.width / 2;

    return position;
  }
}
