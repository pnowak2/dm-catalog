import { PopoverVM } from './../viewmodel/popover.viewmodel';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): PopoverVM;
}
