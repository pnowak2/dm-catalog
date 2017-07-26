import { Point } from './../../interfaces/point';
import { Dimensions } from './../../interfaces/dimensions';
import { Rectangle } from './../../interfaces/rectangle';

export class HtmlElementRectangle implements Rectangle {
  public static create(el: HTMLElement): Rectangle {
    return new HtmlElementRectangle(el);
  }

  private constructor(private el: HTMLElement) { }

  get dimensions(): Dimensions {
    return {
      width: this.el.offsetWidth,
      height: this.el.offsetHeight
    };
  }

  get position(): Point {
    return {
      y: this.el.getBoundingClientRect().top + window.pageYOffset,
      x: this.el.getBoundingClientRect().left + window.pageXOffset
    };
  }
}
