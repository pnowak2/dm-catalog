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

export interface PlacementStrategy {
  getId(): string;
  calculatePosition(trigger: Box, element: Box): Position;
}

