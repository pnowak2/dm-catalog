import { Point } from './../../model/point';
import { Dimensions } from './../../model/dimensions';
import { Rectangle } from './../../model/rectangle';

export class WindowRectangle implements Rectangle {
  public static create(): Rectangle {
    return new WindowRectangle(WindowRectangle.getWindow());
  }

  private constructor(private window: Window) { }

  get dimensions(): Dimensions {
    return {
      width: this.window.document.documentElement.clientWidth,
      height: this.window.document.documentElement.clientHeight
    };
  }

  get position(): Point {
    return {
      y: this.window.pageYOffset,
      x: this.window.pageXOffset
    };
  }

  static getWindow(): Window {
    return window;
  }
}
