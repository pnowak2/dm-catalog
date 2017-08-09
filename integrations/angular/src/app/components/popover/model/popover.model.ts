import { Point } from './../../../shared/geometry/model/point';

export class PopoverVM {

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
  ): PopoverVM {
    return new PopoverVM(
      placement,
      Point.create(containerLeft, containerTop),
      Point.create(arrowLeft, arrowTop)
    );
  }
}
