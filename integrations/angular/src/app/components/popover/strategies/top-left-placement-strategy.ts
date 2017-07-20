import { Position, Box, PlacementStrategy } from '../services/interfaces';

export class TopLeftPlacementStrategy implements PlacementStrategy {
  getId() {
    return "top-left";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top - element.dimension.height;
    position.left = trigger.position.left;

    return position;
  }
}
