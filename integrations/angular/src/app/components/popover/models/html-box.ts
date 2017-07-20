import { Box, Position } from './../services/interfaces';
export class HtmlBox implements Box {
  constructor(private el: HTMLElement) { }

  get width(): number {
    return this.el.offsetWidth;
  }

  get height(): number {
    return this.el.offsetHeight;
  }

  get position(): Position {
    return {
      top: this.el.getBoundingClientRect().top + window.pageYOffset,
      left: this.el.getBoundingClientRect().left + window.pageXOffset
    }
  }
}
