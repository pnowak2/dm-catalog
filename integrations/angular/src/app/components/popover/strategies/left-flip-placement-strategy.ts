import { Injectable, Inject } from '@angular/core';
import { Position, Box, PlacementStrategy } from '../services/interfaces';
import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { BoxService } from '../services/box.service';
import { LeftPlacementStrategy } from './left-placement-strategy';

@Injectable()
export class LeftFlipPlacementStrategy extends LeftPlacementStrategy {

  constructor(
    private boxService: BoxService) {
    super();
  }

  getId() {
    return super.getId();
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = super.calculatePosition(
      trigger,
      element
    );

    const intersection = this.boxService.calculateIntersection(
      SimpleBox.create(position, element.dimension),
      WindowBox.create(window)
    );

    if (intersection.left < 0) {
      position.left = trigger.position.left + trigger.dimension.width;
    }

    return position;
  }
}
