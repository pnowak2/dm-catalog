import { Rectangle } from './../../../interfaces/rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(ref: Rectangle, element: Rectangle): Rectangle;
}
