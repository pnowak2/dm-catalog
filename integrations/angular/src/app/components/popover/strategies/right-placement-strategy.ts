import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { Injectable } from '@angular/core';
import { BoxService } from './../services/box.service';
import { Position, Box, PlacementStrategy } from '../services/interfaces';

@Injectable()
export class RightPlacementStrategy extends PlacementStrategy {
  constructor(protected boxService: BoxService) {
    super();
  }

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

    const intersection = this.boxService.calculateIntersection(
      new SimpleBox(position, element.dimension),
      new WindowBox(window)
    );

    if(intersection.right < 0) {
      position.left = trigger.position.left - element.dimension.width - this.offset;
    }

    if(intersection.top < 0) {
      position.top -= intersection.top;
    }

    if(intersection.bottom < 0) {
      position.top += intersection.bottom;
    }

    return position;
  }
}
