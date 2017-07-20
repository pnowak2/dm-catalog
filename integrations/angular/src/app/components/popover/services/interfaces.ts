export interface Box {
  position: Position;
  width: number,
  height: number;
}

export interface Position {
  top: number,
  left: number;
}

export interface BoundingBox {
  top: number,
  left: number;
  right: number;
  bottom: number;
}

export interface IPositionService {
  calculatePosition(placement: string, trigger: Box, element: Box): Position;
}
