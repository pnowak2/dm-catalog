import { Rectangle, Position, Dimensions } from './../services/interfaces';

export class WindowBox implements Rectangle {
  private constructor(private window: Window) { }

  public static create(el: Window): Rectangle {
    return new WindowBox(el);
  }

  get dimensions(): Dimensions {
    return {
      width: this.window.document.documentElement.clientWidth,
      height: this.window.document.documentElement.clientHeight
    }
  }

  get position(): Position {
    return {
      top: this.window.pageYOffset,
      left: this.window.pageXOffset
    }
  }
}
