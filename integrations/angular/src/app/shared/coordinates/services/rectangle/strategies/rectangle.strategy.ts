import { PlacementOptions } from './../rectangle.service';
import { Rectangle } from './../../../interfaces/rectangle';

export interface RectangleStrategy {
  getId(): string;
  calculate(ref: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle;
}
