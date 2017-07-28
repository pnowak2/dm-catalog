import { Overflow } from './../model/bounds';
import { WindowRectangle } from './rectangles/window-box';
import { HtmlElementRectangle } from './rectangles/html-element-box';
import { Rectangle } from './../model/rectangle';

export class RectangleFactory {
  public static fromHtmlElement(el: HTMLElement): Rectangle {
    return HtmlElementRectangle.create(el);
  };

  public static fromWindow(): Rectangle {
    return WindowRectangle.create();
  };

  public static fromBounds(bounds: Overflow): Rectangle {
    return {
      position: {
        x: bounds.left,
        y: bounds.top
      },
      dimensions: {
        width: bounds.right - bounds.left,
        height: bounds.bottom - bounds.top
      }
    }
  };

  public static fromData(x: number, y: number, width: number, height: number): Rectangle {
    return {
      position: { x, y },
      dimensions: { width, height }
    }
  };
}
