import { Position, Box, PlacementStrategy } from '../services/interfaces';

export class TopPlacementStrategy extends PlacementStrategy {
  getId() {
    return "top";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top - element.height - this.offset;
    position.left = trigger.position.left - element.width / 2 + trigger.width / 2;

    return position;
  }
}
