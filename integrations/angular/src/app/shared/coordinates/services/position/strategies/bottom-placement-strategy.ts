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
    const positionedRect: Rectangle = this.rectangleService.calculatePosition(ref, element, {
      refAnchor: 'bottom center',
      elementAnchor: 'top center',
      offsetX: 0,
      offsetY: 15
    }
    );

    const flippedRect: Rectangle = this.rectangleService.flipHorizontally(
      ref,
      positionedRect
    );

    return positionedRect;
  }
}
