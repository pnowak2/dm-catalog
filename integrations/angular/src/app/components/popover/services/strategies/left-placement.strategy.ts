import { constants } from './../../constants/constants';
import { PlacementOptions } from './../../interface/placement-options';
import { PopoverVM } from './../../viewmodel/popover.viewmodel';
import { Point } from './../../../../shared/geometry/model/point';
import { Rectangle } from './../../../../shared/geometry/model/rectangle';
import { PlacementService } from './../../../../shared/geometry/services/placement/placement.service';
import { PlacementStrategy } from '../../interface/placement-strategy';

export class LeftPlacementStrategy implements PlacementStrategy {
  constructor(private placementService: PlacementService) { }

  getId(): string {
    return 'left';
  }

  calculate(placementOptions: PlacementOptions): PopoverVM {
    const calculatedRect: Rectangle = this.placementService.place({
      anchor: placementOptions.anchorRect,
      element: placementOptions.popoverRect,
      placementId: this.getId(),
      offsetAlong: constants.offset
    });

    const anchorRelativePosition = placementOptions.anchorRect.relativeTo(calculatedRect);

    let effectivePlacement: string;
    let arrowPoint: Point;

    if (calculatedRect.isOnTheLeft(placementOptions.anchorRect.leftTop())) {
      effectivePlacement = 'left';
      arrowPoint = Point.create(
        calculatedRect.width,
        anchorRelativePosition.y + placementOptions.anchorRect.height / 2
      );
    } else {
      effectivePlacement = 'right';
      arrowPoint = Point.create(
        -placementOptions.anchorRect.width / 2,
        anchorRelativePosition.y + placementOptions.anchorRect.height / 2
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
