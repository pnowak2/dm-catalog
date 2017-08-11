import { Point } from './../../../../shared/geometry/model/point';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';

import { PlacementStrategy } from '../../interface/placement-strategy';
import { PopoverVM } from './../../viewmodel/popover.viewmodel';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';

export class RightPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'right';
  }

  calculate(anchorRect: Rectangle, elementRect: Rectangle, arrowRect: Rectangle): PopoverVM {
    const positionedElementRect: Rectangle = this.placementService.place(
      anchorRect,
      elementRect, {
        placementId: this.getId(),
        offsetAlong: 15
      }
    );

    const isFlipped = this.isFlipped(anchorRect, positionedElementRect);
    const anchorPosition = anchorRect.relativeTo(positionedElementRect);

    return PopoverVM.create(
      isFlipped ? 'left' : 'right',
      positionedElementRect.leftTop(),
      Point.create(0, anchorRect.position().y - positionedElementRect.center().y)
    );
  }

  isFlipped(anchorRect: Rectangle, positionedElementRect: Rectangle): boolean {
    return positionedElementRect.isOnTheLeft(anchorRect.center());
  }
}
