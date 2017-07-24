import { Injectable } from '@angular/core';
import { Point } from './../../interfaces/point';
import { Rectangle } from './../../interfaces/rectangle';
import { Intersection } from './../../interfaces/intersection';
import { RectangleService } from './../../interfaces/rectangle.service';

@Injectable()
export class RectangleServiceImpl implements RectangleService {
  calculateBottomCenterPosition(ref: Rectangle, element: Rectangle): Rectangle {
    const top = ref.position.top + ref.dimensions.height;
    const left = ref.position.left - element.dimensions.width / 2 + ref.dimensions.width / 2;

    const rectangle: Rectangle = {
      position: {
        top, left
      },
      dimensions: { ...element.dimensions }
    };

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
    };

    return rectangle;
  }

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle {
    const flipAxisY = ref.position.top + (ref.dimensions.height / 2);
    const elemAxisY = element.position.top + (element.dimensions.height / 2);

    const offset = elemAxisY - flipAxisY;

    if (offset > 0) {
      return {
        position: { ...element.position, top: element.position.top - (2 * offset)},
        dimensions: element.dimensions
      };
    } else {
      return {
        position: { ...element.position, top: element.position.top + (2 * offset) },
        dimensions: element.dimensions
      };
    }
  }

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle {
    const flipAxisX = ref.position.left + (ref.dimensions.width / 2);
    const elemAxisX = element.position.left + (element.dimensions.width / 2);

    const offset = elemAxisX - flipAxisX;

    if (offset > 0) {
      return {
        position: { ...element.position, left: element.position.left - (2 * offset) },
        dimensions: element.dimensions
      };
    } else {
      return {
        position: { ...element.position, left: element.position.left + (2 * offset) },
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
    };

    return intersection;
  }

  calculatePlacementInsideParent(element: Rectangle, parent: Rectangle): Rectangle {
    let position: Point = { ...element.position };

    const intersection: Intersection = this.calculateIntersection(
      element,
      parent
    );

    if (intersection.right < 0) {
      position = {
        ...position,
        left: position.left + intersection.right
      };
    }

    if (intersection.left < 0) {
      position = {
        ...position,
        left: position.left - intersection.left
      };
    }

    if (intersection.top < 0) {
      position = {
        ...position,
        top: position.top - intersection.top,
      };
    }

    if (intersection.bottom < 0) {
      position = {
        ...position,
        top: position.top + intersection.bottom,
      };
    }

    return {
      position: position,
      dimensions: element.dimensions
    };
  }

  toLocalCoords(ref: Rectangle, localParent: Rectangle): Rectangle {
    return {
      position: {
        ...ref.position,
        top: ref.position.top - localParent.position.top,
        left: ref.position.left - localParent.position.left
      },
      dimensions: { ...ref.dimensions }
    };
  }
}
