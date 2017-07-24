import { WindowRectangle } from './rectangles/window-box';
import { HtmlElementRectangle } from './rectangles/html-element-box';
import { Rectangle } from './../interfaces/rectangle';

export class RectangleFactory {
  public static fromHtmlElement(el: HTMLElement): Rectangle {
    return HtmlElementRectangle.create(el);
  };

  public static fromWindow(): Rectangle {
    return WindowRectangle.create();
  };
}
