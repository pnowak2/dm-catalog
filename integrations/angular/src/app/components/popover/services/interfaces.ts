export interface Position {
  top: number,
  left: number;
}

export interface Box {
  position: Position;
  width: number,
  height: number;
}

export abstract class PlacementStrategy {
  offset: number = 15;

  abstract getId(): string;
  abstract calculatePosition(trigger: Box, element: Box): Position;
}

