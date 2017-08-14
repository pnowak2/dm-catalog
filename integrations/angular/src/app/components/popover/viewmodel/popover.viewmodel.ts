import { Offset } from './../../../shared/geometry/model/offset';
import { Point } from './../../../shared/geometry/model/point';

export class PopoverVM {

  private constructor(
    public effectivePlacement: string,
    public containerPosition: Point,
    public arrowOffset: Offset) { }

  public static create(
    placement: string = 'bottom',
    containerPosition: Point = Point.create(0, 0),
    arrowOffset: Offset = Offset.create(0, 0)
  ): PopoverVM {
    return new PopoverVM(
      placement,
      containerPosition,
      arrowOffset
    );
  }
}
