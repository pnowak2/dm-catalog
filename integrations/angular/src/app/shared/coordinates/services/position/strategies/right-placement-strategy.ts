import { Injectable, Inject } from '@angular/core';
import { RectangleFactory } from './../../../factory/rectangle-factory';
import { RECTANGLE_SERVICE } from './../../../coordinates.config';
import { Rectangle } from './../../../interfaces/rectangle';
import { RectangleService } from './../../../services/rectangle/rectangle.service';
import { PlacementStrategy } from './../../../interfaces/placement.strategy';

@Injectable()
export class RightPlacementStrategy implements PlacementStrategy {
  constructor(
    @Inject(RECTANGLE_SERVICE)
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
      RectangleFactory.fromWindow()
    );

    return insideParentRect;
  }
}
