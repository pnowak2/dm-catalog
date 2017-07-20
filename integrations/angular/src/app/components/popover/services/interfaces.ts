import { BoxService } from './box.service';
export interface Position {
  top: number,
  left: number;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface Box {
  position: Position;
  dimensions: Dimensions;
}

export interface Intersection {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export interface PlacementStrategy {
  getId(): string;
  calculate(trigger: Box, element: Box): Position;
}

