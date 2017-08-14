import { Rectangle } from '../model/rectangle';

export interface PlacementOptions {
  anchor: Rectangle;
  element: Rectangle;
  placementId?: string;
  parent?: Rectangle;
  offsetAlong?: number;
  offsetAcross?: number;
  constrainToParent?: boolean;
  flip?: boolean;
}
