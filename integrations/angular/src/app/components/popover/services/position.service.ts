import { Injectable } from '@angular/core';
import { IPositionService, Box, Position } from './interfaces';

@Injectable()
export class PositionService implements IPositionService {
  calculatePosition(placement: string, trigger: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    if (placement === 'top') {
      position.top = trigger.position.top - element.height;
      position.left = trigger.position.left - element.width / 2;
    }

    if (placement === 'bottom') {
      position.top = trigger.position.top + trigger.height;
      position.left = trigger.position.left - element.width / 2;
    }

    if (placement === 'left') {
      position.top = trigger.position.top - element.height / 2 + trigger.height / 2;
      position.left = trigger.position.left - element.width;
    }

    if (placement === 'right') {
      position.top = trigger.position.top - element.height / 2 + trigger.height / 2;
      position.left = trigger.position.left + trigger.width;
    }

    return position;
  }
}
