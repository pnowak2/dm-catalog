import { PlacementOptions } from './../rectangle.service';
import { Injectable } from '@angular/core';
import { Rectangle } from './../../../interfaces/rectangle';
import { RectangleStrategy } from './rectangle.strategy';

@Injectable()
export class BottomCenterTopCenterStrategy implements RectangleStrategy {
  getId(): string {
    return 'bottom center-top center';
  }

  calculate(ref: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    const top = ref.position.top + ref.dimensions.height + options.offset;
    const left = ref.position.left - element.dimensions.width / 2 + ref.dimensions.width / 2;

    const rectangle: Rectangle = {
      position: {
        top, left
      },
      dimensions: { ...element.dimensions }
    };

    return rectangle;
  }
}
