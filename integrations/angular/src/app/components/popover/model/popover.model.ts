import { Point } from './../../../shared/geometry/model/point';

export class Popover {

  private constructor(
    private effectivePlacement: string,
    private containerPosition: Point,
    private arrowPosition: Point) { }

  public static create(
    placement: string = 'bottom',
    containerLeft: number = 0,
    containerTop: number = 0,
    arrowLeft: number = 0,
    arrowTop: number = 0
  ): Popover {
    return new Popover(
      placement,
      Point.create(containerLeft, containerTop),
      Point.create(arrowLeft, arrowTop)
    );
  }
}
