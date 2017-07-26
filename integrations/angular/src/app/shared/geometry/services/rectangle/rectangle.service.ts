import { Bounds } from './../../interfaces/bounds';
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
  moveToPoint(element: Rectangle, point: Point): Rectangle;

  moveBy(element: Rectangle, offsetX, offsetY): Rectangle;

  bounds(element: Rectangle): Bounds;

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle;

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle;

  containsPoint(ref: Rectangle, point: Point): boolean;

  doRectsIntersect(r1: Rectangle, r2: Rectangle): boolean;

  overflow(element: Rectangle, parent: Rectangle): Bounds;

  intersect(r1: Rectangle, r2: Rectangle): Rectangle;

  pointByAnchorName(rect: Rectangle, name: AnchorName): Point;

  positionInsideParent(element: Rectangle, parent: Rectangle): Rectangle;

  moveRelativeTo(ref: Rectangle, element: Rectangle, options?: PlacementOptions): Rectangle;

  toLocalCoords(ref: Point, localParent: Point): Point;
}
