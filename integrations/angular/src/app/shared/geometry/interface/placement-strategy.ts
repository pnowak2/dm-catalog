import { Rectangle } from '../model/rectangle';
import { PlacementOptions } from '../interface/placement-options';

export interface PlacementStrategy {
  getId(): string;
  calculate(options: PlacementOptions): Rectangle;
}
