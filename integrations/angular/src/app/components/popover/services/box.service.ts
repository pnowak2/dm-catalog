import { Box, Intersection, Position } from './interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class BoxService {
  calculateBottomCenterPosition(ref: Box, element: Box): Position {
    let position: Position = {
      top: 0,
      left: 0
    };

    position.top = ref.position.top + ref.dimensions.height;
    position.left = ref.position.left - element.dimensions.width / 2 + ref.dimensions.width / 2;

    return position;
  }

  calculateIntersection(element: Box, parent: Box): Intersection {
    let intersection: Intersection = {
      top: element.position.top - parent.position.top,
      left: element.position.left - parent.position.left,
      right: (parent.position.left + parent.dimensions.width) - (element.position.left + element.dimensions.width),
      bottom: (parent.position.top + parent.dimensions.height) - (element.position.top + element.dimensions.height)
    }

    return intersection;
  }
}
