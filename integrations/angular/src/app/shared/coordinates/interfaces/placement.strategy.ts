import { Rectangle } from './rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(ref: Rectangle, element: Rectangle): Rectangle;
}
