import { Rectangle } from './../model/rectangle';

export class RectangleFactory {
  public static fromHtmlElement(el: HTMLElement): Rectangle {
    return Rectangle.create(
      el.getBoundingClientRect().left + window.pageXOffset,
      el.getBoundingClientRect().top + window.pageYOffset,
      el.offsetWidth,
      el.offsetHeight
    )
  };

  public static fromSvgElement(el: SVGElement): Rectangle {
    return Rectangle.create(
      el.getBoundingClientRect().left + window.pageXOffset,
      el.getBoundingClientRect().top + window.pageYOffset,
      el.clientWidth,
      el.clientHeight
    )
  };

  public static fromWindow(): Rectangle {
    const w = window;
    return Rectangle.create(
      w.pageXOffset,
      w.pageYOffset,
      w.document.documentElement.clientWidth,
      w.document.documentElement.clientHeight
    )
  };
}
