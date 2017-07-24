import { RectangleFactory } from './../../../factory/rectangle-factory';
import { Injectable, Inject } from '@angular/core';
import { RECTANGLE_SERVICE } from './../../../coordinates.config';
import { Rectangle } from './../../../interfaces/rectangle';
import { PlacementStrategy } from './placement.strategy';
import { RectangleService } from './../../../services/rectangle/rectangle.service';


@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(
    @Inject(RECTANGLE_SERVICE)
    private rectangleService: RectangleService) { }

  getId() {
    return 'bottom';
  }

  calculate(ref: Rectangle, element: Rectangle): Rectangle {
    const bottomCenterRect: Rectangle = this.rectangleService.calculateBottomCenterPosition(
      ref,
      element
    );

    const flippedRect: Rectangle = this.rectangleService.flipHorizontally(
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
