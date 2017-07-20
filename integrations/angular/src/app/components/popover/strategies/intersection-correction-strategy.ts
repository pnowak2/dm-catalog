import { BoxService } from './../services/box.service';
import { WindowBox } from './../models/window-box';
import { SimpleBox } from './../models/simple-box';
import { Position, Box, PlacementStrategy } from '../services/interfaces';

export class IntersectionCorrectionPlacementStrategy implements PlacementStrategy {
  constructor(
    private placementStrategy: PlacementStrategy,
    private boxService: BoxService) { }

  getId() {
    return this.placementStrategy.getId();
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position = this.placementStrategy.calculatePosition(trigger, element);

    const intersection = this.boxService.calculateIntersection(
      SimpleBox.create(position, element.dimension),
      WindowBox.create(window)
    );

    if (intersection.right < 0) {
      position.left += intersection.right;
    }

    if (intersection.left < 0) {
      position.left -= intersection.left;
    }

    if (intersection.top < 0) {
      position.top -= intersection.top;
    }

    if (intersection.bottom < 0) {
      position.top += intersection.bottom;
    }

    return position;
  }
}
