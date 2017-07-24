import { PlacementOptions } from './../rectangle.service';
import { Injectable } from '@angular/core';
import { Rectangle } from './../../../interfaces/rectangle';
import { RectangleStrategy } from './rectangle.strategy';

@Injectable()
export class TopLeftBottomRightStrategy implements RectangleStrategy {
  getId(): string {
    return 'top left-bottom right';
  }

  calculate(ref: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const top = ref.position.top + ref.dimensions.height;
    const left = ref.position.left;

    const rectangle: Rectangle = {
      position: {
        top, left
      },
      dimensions: { ...element.dimensions }
    };

    return rectangle;
  }
}
