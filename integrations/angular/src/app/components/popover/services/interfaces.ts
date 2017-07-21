import { BoxService } from './box.service';
export interface Position {
  readonly top: number,
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
  calculate(trigger: Rectangle, element: Rectangle): Position;
}

