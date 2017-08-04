import { Rectangle } from '../model/rectangle';

export interface PlacementOptions {
  placementId?: string,
  parent?: Rectangle,
  offsetAlong?: number,
  offsetAcross?: number,
  constrainToParent?: boolean,
  flip?: boolean
}
