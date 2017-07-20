import { Position, Box, PlacementStrategy } from '../services/interfaces';

export class LeftPlacementStrategy extends PlacementStrategy {
  getId() {
    return "left";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top - element.height / 2 + trigger.height / 2;
    position.left = trigger.position.left - element.width - this.offset;

    return position;
  }
}
