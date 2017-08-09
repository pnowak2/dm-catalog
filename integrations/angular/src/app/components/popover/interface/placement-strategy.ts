import { Popover } from './../model/popover.model';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(anchorRect: Rectangle, containerRect: Rectangle, arrowRect: Rectangle): Popover;
}
