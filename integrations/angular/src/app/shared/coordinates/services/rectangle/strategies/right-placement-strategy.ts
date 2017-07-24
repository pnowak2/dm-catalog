import { Injectable, Inject } from '@angular/core';
import { Rectangle } from './../../../interfaces/rectangle';
import { WindowBox } from './../../../models/window-box';
import { RectangleService } from './../../../interfaces/rectangle.service';
import { PlacementStrategy } from './../../../interfaces/placement.strategy';

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
