import { Rectangle } from './rectangle';

export interface PositionService {
  position(ref: Rectangle, element: Rectangle, placement: string): Rectangle;
}
