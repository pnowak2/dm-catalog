import { Rectangle } from './../../../model/rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(ref: Rectangle, element: Rectangle): Rectangle;
}
