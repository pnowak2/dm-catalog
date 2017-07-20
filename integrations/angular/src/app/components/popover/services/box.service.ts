import { Box, Intersection } from './interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class BoxService {
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
