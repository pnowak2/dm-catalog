import { RectangleFactory } from './../../factory/rectangle-factory';
import { Injectable } from '@angular/core';
import { Point } from './../../model/point';
import { Rectangle } from './../../model/rectangle';
import { Bounds } from './../../model/bounds';
import { RectangleService, PlacementOptions, AnchorName } from './rectangle.service';

@Injectable()
export class DefaultRectangleService implements RectangleService {
  moveRelativeTo(ref: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle {
    let {
      offsetX = 0,
      offsetY = 0,
      refAnchor = AnchorName.BottomCenter,
      elementAnchor = AnchorName.TopCenter
    } = options;

    let refPoint: Point = this.pointByAnchorName(ref, refAnchor);
    let elementPoint: Point = this.pointByAnchorName(element, elementAnchor);

    let correctionX = elementPoint.x - refPoint.x;
    let correctionY = elementPoint.y - refPoint.y;

    return this.moveToPoint(element, {
      x: element.position.x - correctionX + offsetX,
      y: element.position.y - correctionY + offsetY
    });
  }

  moveToPoint(element: Rectangle, point: Point): Rectangle {
    return {
      position: {
        x: point.x,
        y: point.y
      },
      dimensions: { ...element.dimensions }
    }
  }

  moveBy(element: Rectangle, offsetX, offsetY): Rectangle {
    return this.moveToPoint(element, {
      x: element.position.x + offsetX,
      y: element.position.y + offsetY
    });
  }

  pointByAnchorName(rect: Rectangle, position: AnchorName): Point {
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

  overflow(element: Rectangle, parent: Rectangle): Bounds {
    let intersection: Bounds = {
      top: element.position.y - parent.position.y,
      left: element.position.x - parent.position.x,
      right: (parent.position.x + parent.dimensions.width) - (element.position.x + element.dimensions.width),
      bottom: (parent.position.y + parent.dimensions.height) - (element.position.y + element.dimensions.height)
    };

    return intersection;
  }

  doRectsIntersect(r1: Rectangle, r2: Rectangle): boolean {
    const b1 = this.bounds(r1);
    const b2 = this.bounds(r2);

    return b1.left < b2.right &&
      b1.right > b2.left &&
      b1.top < b2.bottom &&
      b1.bottom > b2.top
  }

  intersect(r1: Rectangle, r2: Rectangle): Rectangle {
    const isIntersect = this.doRectsIntersect(r1, r2);
    const b1 = this.bounds(r1);
    const b2 = this.bounds(r2);
    let intersection: Rectangle = null;

    if (isIntersect) {
      intersection = RectangleFactory.fromBounds({
        top: Math.max(b1.top, b2.top),
        left: Math.max(b1.left, b2.left),
        right: Math.min(b1.right, b2.right),
        bottom: Math.min(b1.bottom, b2.bottom)
      });
    }

    return intersection;
  }

  constrainToRect(element: Rectangle, parent: Rectangle): Rectangle {
    let position: Point = { ...element.position };

    const intersection: Bounds = this.overflow(
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

  bounds(element: Rectangle): Bounds {
    return {
      top: element.position.y,
      left: element.position.x,
      right: element.position.x + element.dimensions.width,
      bottom: element.position.y + element.dimensions.height
    }
  }

  rectangleFromBounds(bounds: Bounds): Rectangle {
    return {
      position: {
        x: bounds.left,
        y: bounds.top
      },
      dimensions: {
        width: bounds.right - bounds.left,
        height: bounds.bottom - bounds.top
      }
    }
  }

  containsPoint(ref: Rectangle, point: Point): boolean {
    const refBounds = this.bounds(ref);

    const containsX = point.x >= refBounds.left && point.x <= refBounds.right
    const containsY = point.y >= refBounds.top && point.y <= refBounds.bottom

    return containsX && containsY;
  }

  toLocalCoords(ref: Point, parent: Point): Point {
    return {
      x: ref.x - parent.x,
      y: ref.y - parent.y
    };
  }
}
