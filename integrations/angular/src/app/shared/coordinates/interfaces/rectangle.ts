import { Dimensions } from './dimensions';
import { Point } from './point';

export interface Rectangle {
  readonly position: Point;
  readonly dimensions: Dimensions;
}
