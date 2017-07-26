import { Point } from './../../interfaces/point';
import { Dimensions } from './../../interfaces/dimensions';
import { Rectangle } from './../../interfaces/rectangle';

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
