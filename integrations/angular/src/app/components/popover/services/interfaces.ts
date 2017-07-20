import { BoxService } from './box.service';
export interface Position {
  top: number,
  left: number;
}

export interface Dimension {
  width: number;
  height: number;
}

export interface Box {
  position: Position;
  dimension: Dimension;
}

export interface Bounds {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export abstract class PlacementStrategy {
  offset: number = 15;

  abstract getId(): string;
  abstract calculatePosition(trigger: Box, element: Box): Position;
}

