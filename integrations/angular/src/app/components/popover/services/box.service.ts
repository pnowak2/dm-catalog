import { Rectangle, Intersection, Position } from './interfaces';
import { Injectable } from '@angular/core';

@Injectable()
export class BoxService {
  calculateBottomCenterPosition(ref: Rectangle, element: Rectangle): Rectangle {
    const top = ref.position.top + ref.dimensions.height;
    const left = ref.position.left - element.dimensions.width / 2 + ref.dimensions.width / 2;

    const rectangle: Rectangle = {
      position: {
        top, left
      },
      dimensions: { ...element.dimensions }
    }

    return rectangle;
  }

  calculateRightPosition(ref: Rectangle, element: Rectangle): Rectangle {
    const top = ref.position.top - element.dimensions.height / 2 + ref.dimensions.height / 2;
    const left = ref.position.left + ref.dimensions.width;

    const rectangle: Rectangle = {
      position: {
        top, left
      },
      dimensions: { ...element.dimensions }
    }

    return rectangle;
  }

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle {
    const offset = element.position.top - ref.position.top;

    if (offset > 0) {
      return {
        position: { ...element.position, top: element.position.top - offset - element.dimensions.height },
        dimensions: element.dimensions
      };
    } else {
      return {
        position: { ...element.position, top: element.position.top + offset + element.dimensions.height },
        dimensions: element.dimensions
      };
    }
  }

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle {
    const offset = element.position.left - ref.position.left;

    if (offset > 0) {
      return {
        position: { ...element.position, left: element.position.left - offset - element.dimensions.width },
        dimensions: element.dimensions
      };
    } else {
      return {
        position: { ...element.position, left: element.position.left + offset + element.dimensions.width },
        dimensions: element.dimensions
      };
    }
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

  calculatePlacementInsideParent(element: Rectangle, parent: Rectangle): Rectangle {
    let position: Position = { ...element.position };

    const intersection: Intersection = this.calculateIntersection(
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

    return {
      position: position,
      dimensions: element.dimensions
    };
  }
}
