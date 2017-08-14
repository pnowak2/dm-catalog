import { constants } from './../../constants/constants';
import { PlacementOptions } from './../../interface/placement-options';
import { Offset } from './../../../../shared/geometry/model/offset';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';

import { PlacementStrategy } from '../../interface/placement-strategy';
import { PopoverVM } from './../../viewmodel/popover.viewmodel';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';

export class RightPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'right';
  }

  calculate(placementOptions: PlacementOptions): PopoverVM {
    const positionedElementRect: Rectangle = this.placementService.place({
      anchor: placementOptions.anchorRect,
      element: placementOptions.popoverRect,
      placementId: this.getId(),
      offsetAlong: constants.offset
    });

    const isFlipped = this.isFlipped(placementOptions.anchorRect, positionedElementRect);
    const anchorPosition = placementOptions.anchorRect.relativeTo(positionedElementRect);

    return PopoverVM.create({
      placementClassModifier: isFlipped ? 'left' : 'right',
      popoverPosition: positionedElementRect.leftTop(),
      arrowOffset: Offset.create(0, placementOptions.anchorRect.center().y - positionedElementRect.center().y)
    });
  }

  isFlipped(anchorRect: Rectangle, positionedElementRect: Rectangle): boolean {
    return positionedElementRect.isOnTheLeft(anchorRect.center());
  }
}
