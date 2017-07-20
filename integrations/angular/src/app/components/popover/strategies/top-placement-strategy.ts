import { Injectable } from '@angular/core';
import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { Position, Box, PlacementStrategy } from '../services/interfaces';
import { BoxService } from '../services/box.service';

@Injectable()
export class TopPlacementStrategy implements PlacementStrategy {

  constructor(private boxService: BoxService) { }

  getId() {
    return "top";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top - element.dimensions.height;
    position.left = trigger.position.left - element.dimensions.width / 2 + trigger.dimensions.width / 2;

    const intersection = this.boxService.calculateIntersection(
      SimpleBox.create(position, element.dimensions),
      WindowBox.create(window)
    );

    if (intersection.top < 0) {
      position.top = trigger.position.top + trigger.dimensions.height;
    }

    return position;
  }
}
