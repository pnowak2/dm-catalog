import { Position, Box, PlacementStrategy } from '../services/interfaces';

export class LeftPlacementStrategy implements PlacementStrategy {
  getId() {
    return "left";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top - element.dimension.height / 2 + trigger.dimension.height / 2;
    position.left = trigger.position.left - element.dimension.width;

    return position;
  }
}
