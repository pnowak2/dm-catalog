import { Rectangle } from './../../../model/rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(anchor: Rectangle, element: Rectangle, parent: Rectangle): Rectangle;
}
