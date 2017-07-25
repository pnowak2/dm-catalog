import { Intersection } from './../../interfaces/intersection';
import { Point } from './../../interfaces/point';
import { Rectangle } from './../../interfaces/rectangle';

export interface PlacementOptions {
  refAnchor: AnchorName;
  elementAnchor: AnchorName,
  offsetX?: number,
  offsetY?: number
}

export enum AnchorName {
  TopLeft, TopCenter, TopRight,
  CenterLeft, CenterCenter, CenterRight,
  BottomLeft, BottomCenter, BottomRight
}

export interface RectangleService {
  calculatePosition(ref: Rectangle, element: Rectangle, options?: PlacementOptions): Rectangle;

  getPositionByAnchorName(rect: Rectangle, name: AnchorName): Point;

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle;

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle;

  calculateIntersection(element: Rectangle, parent: Rectangle): Intersection;

  calculatePlacementInsideParent(element: Rectangle, parent: Rectangle): Rectangle;

  toLocalCoords(ref: Rectangle, localParent: Rectangle): Rectangle;
}
