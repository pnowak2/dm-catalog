import { Injectable } from '@angular/core';

export interface Box {
  readonly position: Position;
  readonly width: number,
  readonly height: number;
}

export interface Position {
  top: number,
  left: number;
}

export interface BoundingBox {
  readonly top: number,
  readonly left: number;
  readonly right: number;
  readonly bottom: number;
}

export interface IPosition {
  calculate(placement: string, trigger: Box, element: Box): Position;
  // checkOverflow(element: Box, parent: Box): BoundingBox;
}

@Injectable()
export class PopoverService implements IPosition {
 calculate(placement: string, trigger: Box, element: Box): Position {
   if(placement === 'center top center bottom') {
     let position: Position;

     position.top = trigger.position.top + trigger.height;
     position.left = trigger.position.left - element.width / 2;
   }
   return;
 }
}
