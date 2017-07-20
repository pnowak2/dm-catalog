import { Injectable, Inject } from '@angular/core';
import { Position, Box, PlacementStrategy } from '../services/interfaces';
import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { BoxService } from '../services/box.service';
import { LeftPlacementStrategy } from './left-placement-strategy';

@Injectable()
export class LeftFlipPlacementStrategy implements PlacementStrategy {

  constructor(
    private placementStrategy: LeftPlacementStrategy,
    private boxService: BoxService) { }

  getId() {
    return this.placementStrategy.getId();
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = this.placementStrategy.calculatePosition(
      trigger,
      element
    );

    const intersection = this.boxService.calculateIntersection(
      SimpleBox.create(position, element.dimensions),
      WindowBox.create(window)
    );

    if (intersection.left < 0) {
      position.left = trigger.position.left + trigger.dimensions.width;
    }

    return position;
  }
}
