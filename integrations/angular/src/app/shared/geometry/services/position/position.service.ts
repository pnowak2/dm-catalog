import { Rectangle } from './../../model/rectangle';

export interface PositionService {
  position(ref: Rectangle, element: Rectangle, placement: string): Rectangle;
}
