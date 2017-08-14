import { Position } from './../interface/position';

export class Point implements Position {
  private constructor(public x: number, public y: number) { }

  public static create(x: number, y: number): Point {
    return new Point(x, y);
  }

  clone(): Point {
    return Point.create(this.x, this.y);
  }

  set(x, y): Point {
    this.x = x;
    this.y = y;

    return this;
  }

  translate(offsetX: number, offsetY: number): Point {
    this.x += offsetX;
    this.y += offsetY;

    return this;
  }

  translateX(offsetX: number): Point {
    return this.translate(offsetX, 0);
  }

  translateY(offsetY: number): Point {
    return this.translate(0, offsetY);
  }

  scale(factor: number): Point {
    this.x *= factor;
    this.y *= factor;

    return this;
  }

  map(fn: (number) => number) {
    this.x = fn.call(this, this.x);
    this.y = fn.call(this, this.y);

    return this;
  }

  isZero(): boolean {
    return this.equals(Point.create(0, 0));
  }

  equals(other: Point): boolean {
    return this.x === other.x && this.y === other.y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
