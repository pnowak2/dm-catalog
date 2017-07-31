import { Rectangle } from '../../../model/rectangle';
import { PlacementOptions } from '../interface/placement-options';

export interface PlacementStrategy {
  getId(): string;
  calculate(anchor: Rectangle, element: Rectangle, options: PlacementOptions): Rectangle;
}
