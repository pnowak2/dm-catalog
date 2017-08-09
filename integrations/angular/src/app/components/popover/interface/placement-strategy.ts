import { PopoverVM } from './../model/popover.model';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): PopoverVM;
}
