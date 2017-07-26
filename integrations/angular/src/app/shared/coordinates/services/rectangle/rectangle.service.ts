import { Overflow } from './../../interfaces/intersection';
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

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle;

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle;

  overflow(element: Rectangle, parent: Rectangle): Overflow;

  pointByAnchorName(rect: Rectangle, name: AnchorName): Point;

  positionInsideParent(element: Rectangle, parent: Rectangle): Rectangle;

  moveRelativeTo(ref: Rectangle, element: Rectangle, options?: PlacementOptions): Rectangle;

  toLocalCoords(ref: Point, localParent: Point): Point;
}
