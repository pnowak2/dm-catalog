import { RectangleFactory } from './../../../factory/rectangle-factory';
import { Injectable, Inject } from '@angular/core';
import { RECTANGLE_SERVICE } from './../../../coordinates.config';
import { Rectangle } from './../../../interfaces/rectangle';
import { PlacementStrategy } from './placement.strategy';
import { RectangleService, AnchorName } from './../../../services/rectangle/rectangle.service';

@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(
    @Inject(RECTANGLE_SERVICE)
    private rectangleService: RectangleService) { }

  getId() {
    return 'bottom';
  }

  calculate(ref: Rectangle, element: Rectangle): Rectangle {
    const positionedRect: Rectangle = this.rectangleService.moveRelativeTo(ref, element, {
      refAnchor: AnchorName.BottomCenter,
      elementAnchor: AnchorName.TopCenter,
      offsetX: 0,
      offsetY: 15
    }
    );

    const intersection = this.rectangleService.overflow(
      positionedRect,
      RectangleFactory.fromWindow()
    );

    let flippedRect: Rectangle;
    if (intersection.bottom < 0) {
      flippedRect = this.rectangleService.flipHorizontally(
        ref,
        positionedRect
      );
    } else {
      flippedRect = positionedRect;
    }

    const windowConstrainedRect = this.rectangleService.positionInsideParent(
      flippedRect,
      RectangleFactory.fromWindow()
    );

    return windowConstrainedRect;
  }
}
