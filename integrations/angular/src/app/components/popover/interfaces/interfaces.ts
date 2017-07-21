export interface Position {
  readonly top: number;
  readonly left: number;
}

export interface Dimensions {
  readonly width: number;
  readonly height: number;
}

export interface Rectangle {
  readonly position: Position;
  readonly dimensions: Dimensions;
}

export interface Intersection {
  readonly top: number;
  readonly left: number;
  readonly right: number;
  readonly bottom: number;
}

export interface PlacementStrategy {
  getId(): string;
  calculate(ref: Rectangle, element: Rectangle): Rectangle;
}

export interface RectangleService {
  calculateBottomCenterPosition(ref: Rectangle, element: Rectangle): Rectangle;

  calculateRightPosition(ref: Rectangle, element: Rectangle): Rectangle;

  flipHorizontally(ref: Rectangle, element: Rectangle): Rectangle;

  flipVertically(ref: Rectangle, element: Rectangle): Rectangle;

  calculateIntersection(element: Rectangle, parent: Rectangle): Intersection;

  calculatePlacementInsideParent(element: Rectangle, parent: Rectangle): Rectangle;

  toLocalCoords(ref: Rectangle, localParent: Rectangle): Rectangle;
}
