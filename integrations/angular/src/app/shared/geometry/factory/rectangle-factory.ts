import { Rectangle } from './../model/rectangle';

export class RectangleFactory {
  public static fromHtmlElement(el: HTMLElement): Rectangle {
    const w = this.getWindow();

    return Rectangle.create(
      el.getBoundingClientRect().left + w.pageXOffset,
      el.getBoundingClientRect().top + w.pageYOffset,
      el.offsetWidth,
      el.offsetHeight
    );
  }

  public static fromSvgElement(el: SVGElement): Rectangle {
    const w = this.getWindow();

    return Rectangle.create(
      el.getBoundingClientRect().left + w.pageXOffset,
      el.getBoundingClientRect().top + w.pageYOffset,
      el.clientWidth,
      el.clientHeight
    );
  }

  public static fromWindow(): Rectangle {
    const w = this.getWindow();

    return Rectangle.create(
      w.pageXOffset,
      w.pageYOffset,
      w.document.documentElement.clientWidth,
      w.document.documentElement.clientHeight
    );
  }

  public static getWindow(): Window {
    return window;
  }
}
