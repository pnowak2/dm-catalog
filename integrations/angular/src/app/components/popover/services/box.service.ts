import { Box, Bounds } from './interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class BoxService {
  calculateIntersection(element: Box, parent: Box): Bounds {
    let intersection: Bounds = {
      top: element.position.top - parent.position.top,
      left: element.position.left - parent.position.left,
      right: (parent.position.left + parent.dimension.width) - (element.position.left + element.dimension.width),
      bottom: (parent.position.top + parent.dimension.height) - (element.position.top + element.dimension.height)
    }

    return intersection;
  }
}
