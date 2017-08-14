import { PlacementOptions } from './../services/popover.service';
import { PopoverVM } from './../viewmodel/popover.viewmodel';
import { Rectangle } from './../../../shared/geometry/model/rectangle';

export interface PlacementStrategy {
  getId(): string;
  calculate(placementOptions: PlacementOptions): PopoverVM;
}
