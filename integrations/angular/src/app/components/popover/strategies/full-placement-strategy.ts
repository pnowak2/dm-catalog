import { Injectable } from '@angular/core';
import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { Position, Box, PlacementStrategy } from '../services/interfaces';
import { BoxService } from '../services/box.service';

@Injectable()
export class FullPlacementStrategy implements PlacementStrategy {

  constructor(private boxService: BoxService) { }

  getId() {
    return "top";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top - element.dimension.height;
    position.left = trigger.position.left - element.dimension.width / 2 + trigger.dimension.width / 2;

    const intersection = this.boxService.calculateIntersection(
      new SimpleBox(position, element.dimension),
      new WindowBox(window)
    );

    if (intersection.top < 0) {
      position.top = trigger.position.top + trigger.dimension.height;
    }

    return position;
  }
}
