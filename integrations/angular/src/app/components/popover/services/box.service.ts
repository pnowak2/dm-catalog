import { Rectangle, Intersection, Position } from './interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class BoxService {
  calculateBottomCenterPosition(ref: Rectangle, element: Rectangle): Position {
    return {
      top: ref.position.top + ref.dimensions.height,
      left: ref.position.left - element.dimensions.width / 2 + ref.dimensions.width / 2
    };
  }

  calculateIntersection(element: Rectangle, parent: Rectangle): Intersection {
    let intersection: Intersection = {
      top: element.position.top - parent.position.top,
      left: element.position.left - parent.position.left,
      right: (parent.position.left + parent.dimensions.width) - (element.position.left + element.dimensions.width),
      bottom: (parent.position.top + parent.dimensions.height) - (element.position.top + element.dimensions.height)
    }

    return intersection;
  }

  calculatePlacementInsideParent(element: Rectangle, parent: Rectangle): Position {
    let position: Position = {...element.position};

    const intersection = this.calculateIntersection(
      element,
      parent
    );

    if (intersection.right < 0) {
      position = {
        ...position,
        left: position.left + intersection.right
      }
    }

    if (intersection.left < 0) {
      position = {
        ...position,
        left: position.left - intersection.left
      }
    }

    if (intersection.top < 0) {
      position = {
        ...position,
        top: position.top - intersection.top,
      }
    }

    if (intersection.bottom < 0) {
      position = {
        ...position,
        top: position.top + intersection.bottom,
      }
    }

    return position;
  }
}
