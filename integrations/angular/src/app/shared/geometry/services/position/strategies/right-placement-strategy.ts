import { Injectable, Inject } from '@angular/core';
import { RectangleFactory } from './../../../factory/rectangle-factory';
import { RECTANGLE_SERVICE } from './../../../geometry.config';
import { Rectangle } from './../../../model/rectangle';
import { PlacementStrategy } from './placement.strategy';
import { RectangleService } from './../../../services/rectangle/rectangle.service';

@Injectable()
export class RightPlacementStrategy implements PlacementStrategy {
  constructor(
    @Inject(RECTANGLE_SERVICE)
    private rectangleService: RectangleService) { }

  getId() {
    return 'right';
  }

  calculate(ref: Rectangle, element: Rectangle): Rectangle {
    const bottomCenterRect: Rectangle = this.rectangleService.moveRelativeTo(
      ref,
      element
    );

    const flippedRect: Rectangle = this.rectangleService.flipVertically(
      ref,
      bottomCenterRect
    );

    const insideParentRect: Rectangle = this.rectangleService.positionInsideParent(
      flippedRect,
      RectangleFactory.fromWindow()
    );

    return insideParentRect;
  }
}
