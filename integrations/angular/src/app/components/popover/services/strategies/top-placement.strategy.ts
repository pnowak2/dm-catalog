import { BottomPlacementStrategy } from './bottom-placement.strategy';

export class TopPlacementStrategy extends BottomPlacementStrategy {
  getId(): string {
    return 'top';
  }
}
