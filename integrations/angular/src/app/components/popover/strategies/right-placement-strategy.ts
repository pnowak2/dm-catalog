import { Injectable } from '@angular/core';
import { Position, Rectangle, PlacementStrategy } from '../services/interfaces';
import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { BoxService } from '../services/box.service';

@Injectable()
export class RightPlacementStrategy implements PlacementStrategy {
  constructor(
    private boxService: BoxService) { }

  getId() {
    return "right";
  }

  calculate(ref: Rectangle, element: Rectangle): Rectangle {
    const bottomCenterRect: Rectangle = this.boxService.calculateRightPosition(
      ref,
      element
    );

    const flippedRect: Rectangle = this.boxService.flipVertically(
      ref,
      bottomCenterRect
    );

    const insideParentRect: Rectangle = this.boxService.calculatePlacementInsideParent(
      flippedRect,
      WindowBox.create(window)
    );

    return insideParentRect;
  }
}
