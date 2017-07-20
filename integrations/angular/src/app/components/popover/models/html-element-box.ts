import { Box, Position, Dimension } from './../services/interfaces';

export class HtmlElementBox implements Box {
  private constructor(private el: HTMLElement) { }

  public static create(el: HTMLElement): Box {
    return new HtmlElementBox(el);
  }

  get dimension(): Dimension {
    return {
      width: this.el.offsetWidth,
      height: this.el.offsetHeight
    }
  }

  get position(): Position {
    return {
      top: this.el.getBoundingClientRect().top + window.pageYOffset,
      left: this.el.getBoundingClientRect().left + window.pageXOffset
    }
  }

  set position(position) {
    this.el.style.top = position.top + 'px';
    this.el.style.left = position.left + 'px';
  }
}
