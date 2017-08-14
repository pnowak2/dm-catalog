import { Rectangle } from './../../../shared/geometry/model/rectangle';

export interface PlacementOptions {
  placement: string;
  anchorRect: Rectangle;
  popoverRect: Rectangle;
  arrowRect: Rectangle;
}
