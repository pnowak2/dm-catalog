import { Border } from './../model/border';

export class BorderFactory {
  public static fromHtmlElement(el: HTMLElement): Border {
    return Border.create(
      el.clientLeft,
      el.clientTop,
      el.offsetWidth - el.clientWidth - el.clientLeft,
      el.offsetHeight - el.clientHeight - el.clientTop
    );
  }
}
