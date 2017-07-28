import { Rectangle } from './../../../model/rectangle';

export interface PlacementOptions {
  placement: string,
  parent: Rectangle,
  constrainToParent: boolean,
  flip: boolean
}

export interface PlacementStrategy {
  getId(): string;
  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle;
}
