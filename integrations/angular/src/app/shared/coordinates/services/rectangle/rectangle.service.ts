import { Intersection } from './../../interfaces/intersection';
import { Rectangle } from './../../interfaces/rectangle';

export interface PlacementOptions {
  refAnchor: string;
  elementAnchor: string,
  offsetX?: number,
  offsetY?: number
}

export interface RectangleService {
  calculatePosition(ref: Rectangle, element: Rectangle, options?: PlacementOptions): Rectangle;

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle;

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle;

  calculateIntersection(element: Rectangle, parent: Rectangle): Intersection;

  calculatePlacementInsideParent(element: Rectangle, parent: Rectangle): Rectangle;

  toLocalCoords(ref: Rectangle, localParent: Rectangle): Rectangle;
}
