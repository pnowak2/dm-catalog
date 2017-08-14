import { PlacementOptions } from './placement-options';
import { PopoverVM } from './../viewmodel/popover.viewmodel';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(placementOptions: PlacementOptions): PopoverVM;
}
