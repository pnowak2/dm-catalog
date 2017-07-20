import { Position, Box, PlacementStrategy } from '../services/interfaces';

export class TopLeftPlacementStrategy extends PlacementStrategy {
  getId() {
    return "top-left";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top - element.dimension.height - this.offset;
    position.left = trigger.position.left - this.offset;

    return position;
  }
}
