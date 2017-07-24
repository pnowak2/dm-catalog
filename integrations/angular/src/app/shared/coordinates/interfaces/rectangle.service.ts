import { Rectangle } from './rectangle';
import { Intersection } from './intersection';

export interface RectangleService {
  calculateBottomCenterPosition(ref: Rectangle, element: Rectangle): Rectangle;

  calculateRightPosition(ref: Rectangle, element: Rectangle): Rectangle;

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle;

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle;

  calculateIntersection(element: Rectangle, parent: Rectangle): Intersection;

  calculatePlacementInsideParent(element: Rectangle, parent: Rectangle): Rectangle;

  toLocalCoords(ref: Rectangle, localParent: Rectangle): Rectangle;
}
