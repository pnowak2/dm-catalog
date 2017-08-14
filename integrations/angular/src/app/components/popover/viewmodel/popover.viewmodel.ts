import { Point } from './../../../shared/geometry/model/point';
import { Position } from './../../../shared/geometry/interface/position';
import { Offset } from './../../../shared/geometry/model/offset';

interface PopoverDetails {
  placementClassModifier: string;
  popoverPosition: Position;
  arrowOffset: Offset;
}

export class PopoverVM implements PopoverDetails {
  private constructor(
    public placementClassModifier: string = 'no-direction',
    public popoverPosition: Position = Point.create(0, 0),
    public arrowOffset: Offset = Offset.create(0, 0)) { }

  public static create(popoverDetails?: PopoverDetails): PopoverVM {
    if (!popoverDetails) {
      return new PopoverVM();
    }

    return new PopoverVM(
      popoverDetails.placementClassModifier,
      popoverDetails.popoverPosition,
      popoverDetails.arrowOffset
    );
  }
}
