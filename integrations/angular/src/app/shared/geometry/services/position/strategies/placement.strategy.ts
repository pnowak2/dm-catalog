import { Rectangle } from './../../../model/rectangle';

export interface PlacementOptions {
  placementId?: string,
  parent?: Rectangle,
  offset?: number,
  constrainToParent?: boolean,
  flip?: boolean
}

export interface PlacementStrategy {
  getId(): string;
  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle;
}
