import { RightPlacementStrategy } from './right-placement.strategy';

export class LeftPlacementStrategy extends RightPlacementStrategy {
  getId(): string {
    return 'left';
  }
}
