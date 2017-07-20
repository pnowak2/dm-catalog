import { Position, Box, PlacementStrategy } from '../services/interfaces';

export class BottomPlacementStrategy extends PlacementStrategy {
  getId() {
    return "bottom";
  }

  calculatePosition(trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = trigger.position.top + trigger.height + this.spacer;
    position.left = trigger.position.left - element.width / 2 + trigger.width / 2;

    return position;
  }
}
