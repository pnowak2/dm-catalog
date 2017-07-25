import { Injectable } from '@angular/core';
import { Point } from './../../interfaces/point';
import { Rectangle } from './../../interfaces/rectangle';
import { Intersection } from './../../interfaces/intersection';
import { RectangleService, PlacementOptions, AnchorName } from './rectangle.service';

@Injectable()
export class DefaultRectangleService implements RectangleService {
  calculatePosition(ref: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    let refPoint: Point = this.getPositionByAnchorName(ref, options.refAnchor);
    let elementPoint: Point = this.getPositionByAnchorName(element, options.elementAnchor);

    let correctionX = elementPoint.x - refPoint.x;
    let correctionY = elementPoint.y - refPoint.y;

    return {
      position: {
        x: element.position.x - correctionX + options.offsetX,
        y: element.position.y - correctionY + options.offsetY
      },
      dimensions: { ...element.dimensions }
    }
  }

  getPositionByAnchorName(rect: Rectangle, position: AnchorName): Point {
    let refPoint: Point;

    if (position === AnchorName.TopLeft) {
      refPoint = {
        x: rect.position.x,
        y: rect.position.y
      }
    }

    if (position === AnchorName.TopCenter) {
      refPoint = {
        x: rect.position.x + (rect.dimensions.width / 2),
        y: rect.position.y
      }
    }

    if (position === AnchorName.TopRight) {
      refPoint = {
        x: rect.position.x + rect.dimensions.width,
        y: rect.position.y
      }
    }

    if (position === AnchorName.CenterLeft) {
      refPoint = {
        x: rect.position.x,
        y: rect.position.y + (rect.dimensions.height / 2)
      }
    }

    if (position === AnchorName.CenterCenter) {
      refPoint = {
        x: rect.position.x + (rect.dimensions.width / 2),
        y: rect.position.y + (rect.dimensions.height / 2)
      }
    }

    if (position === AnchorName.CenterRight) {
      refPoint = {
        x: rect.position.x + rect.dimensions.width,
        y: rect.position.y + (rect.dimensions.height / 2)
      }
    }

    if (position === AnchorName.BottomLeft) {
      refPoint = {
        x: rect.position.x,
        y: rect.position.y + rect.dimensions.height
      }
    }

    if (position === AnchorName.BottomCenter) {
      refPoint = {
        x: rect.position.x + (rect.dimensions.width / 2),
        y: rect.position.y + rect.dimensions.height
      }
    }

    if (position === AnchorName.BottomRight) {
      refPoint = {
        x: rect.position.x + rect.dimensions.width,
        y: rect.position.y + rect.dimensions.height
      }
    }

    return refPoint;
  }

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle {
    const flipAxisY = ref.position.y + (ref.dimensions.height / 2);
    const elemAxisY = element.position.y + (element.dimensions.height / 2);

    const offset = elemAxisY - flipAxisY;

    if (offset > 0) {
      return {
        position: { ...element.position, y: element.position.y - (2 * offset) },
        dimensions: element.dimensions
      };
    } else {
      return {
        position: { ...element.position, y: element.position.y + (2 * offset) },
        dimensions: element.dimensions
      };
    }
  }

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle {
    const flipAxisX = ref.position.x + (ref.dimensions.width / 2);
    const elemAxisX = element.position.x + (element.dimensions.width / 2);

    const offset = elemAxisX - flipAxisX;

    if (offset > 0) {
      return {
        position: { ...element.position, x: element.position.x - (2 * offset) },
        dimensions: element.dimensions
      };
    } else {
      return {
        position: { ...element.position, x: element.position.x + (2 * offset) },
        dimensions: element.dimensions
      };
    }
  }

  calculateIntersection(element: Rectangle, parent: Rectangle): Intersection {
    let intersection: Intersection = {
      top: element.position.y - parent.position.y,
      left: element.position.x - parent.position.x,
      right: (parent.position.x + parent.dimensions.width) - (element.position.x + element.dimensions.width),
      bottom: (parent.position.y + parent.dimensions.height) - (element.position.y + element.dimensions.height)
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
        x: position.x + intersection.right
      };
    }

    if (intersection.left < 0) {
      position = {
        ...position,
        x: position.x - intersection.left
      };
    }

    if (intersection.top < 0) {
      position = {
        ...position,
        y: position.y - intersection.top,
      };
    }

    if (intersection.bottom < 0) {
      position = {
        ...position,
        y: position.y + intersection.bottom,
      };
    }

    return {
      position: position,
      dimensions: element.dimensions
    };
  }

  toLocalCoords(ref: Rectangle, parent: Rectangle): Rectangle {
    return {
      position: {
        ...ref.position,
        x: ref.position.x - parent.position.x,
        y: ref.position.y - parent.position.y
      },
      dimensions: { ...ref.dimensions }
    };
  }
}
