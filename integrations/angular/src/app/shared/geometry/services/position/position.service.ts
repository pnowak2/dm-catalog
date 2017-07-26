import { Rectangle } from './../../interfaces/rectangle';

export interface PositionService {
  position(ref: Rectangle, element: Rectangle, placement: string): Rectangle;
}
