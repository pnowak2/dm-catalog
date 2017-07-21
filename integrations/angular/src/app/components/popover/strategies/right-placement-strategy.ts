import { Injectable, Inject } from '@angular/core';
import { Position, Rectangle, PlacementStrategy, RectangleService } from '../interfaces/interfaces';
import { WindowBox } from './../models/window-box';

@Injectable()
export class RightPlacementStrategy implements PlacementStrategy {
  constructor(
    @Inject('RectangleService')
    private rectangleService: RectangleService) { }

  getId() {
    return 'right';
  }

  calculate(ref: Rectangle, element: Rectangle): Rectangle {
    const bottomCenterRect: Rectangle = this.rectangleService.calculateRightPosition(
      ref,
      element
    );

    const flippedRect: Rectangle = this.rectangleService.flipVertically(
      ref,
      bottomCenterRect
    );

    const insideParentRect: Rectangle = this.rectangleService.calculatePlacementInsideParent(
      flippedRect,
      WindowBox.create()
    );

    return insideParentRect;
  }
}
