import { PlacementOptions } from './../popover.service';
import { PopoverVM } from './../../viewmodel/popover.viewmodel';
import { Point } from './../../../../shared/geometry/model/point';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';
import { PlacementStrategy } from '../../interface/placement-strategy';

export class TopPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'top';
  }

  calculate(placementOptions: PlacementOptions): PopoverVM {
    const calculatedRect: Rectangle = this.placementService.place(
      placementOptions.anchorRect,
      placementOptions.popoverRect, {
        placementId: this.getId(),
        offsetAlong: 15
      }
    );

    const anchorRelativePosition = placementOptions.anchorRect.relativeTo(calculatedRect);

    let effectivePlacement: string;
    let arrowPoint: Point;

    if (calculatedRect.isBelow(placementOptions.anchorRect.leftTop())) {
      effectivePlacement = 'bottom';
      arrowPoint = Point.create(
        anchorRelativePosition.x + placementOptions.anchorRect.width / 2,
        -placementOptions.anchorRect.height / 2
      );
    } else {
      effectivePlacement = 'top';
      arrowPoint = Point.create(
        anchorRelativePosition.x + placementOptions.anchorRect.width / 2,
        calculatedRect.height
      );
    }
    return null;
    // return PopoverVM.create(
    //   effectivePlacement,
    //   calculatedRect.leftTop(),
    //   arrowPoint
    // );
  }
}
