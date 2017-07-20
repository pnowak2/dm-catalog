import { Injectable } from '@angular/core';
import { IPositionService, Box, Position } from './interfaces';

@Injectable()
export class PositionService implements IPositionService {
  calculatePosition(placement: string, trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    if (placement === 'center top center bottom') {
      position.top = trigger.position.top + trigger.height;
      position.left = trigger.position.left - element.width / 2;
    }

    return position;
  }
}
