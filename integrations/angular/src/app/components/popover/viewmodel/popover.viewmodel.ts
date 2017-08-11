import { Point } from './../../../shared/geometry/model/point';

export class PopoverVM {

  private constructor(
    private effectivePlacement: string,
    private containerPosition: Point,
    private arrowPosition: Point) { }

  public static create(
    placement: string = 'bottom',
    containerPosition: Point = Point.create(0, 0),
    arrowPosition: Point = Point.create(0, 0)
  ): PopoverVM {
    return new PopoverVM(
      placement,
      containerPosition,
      arrowPosition
    );
  }
}
