import { Dimensions } from './dimensions';
import { Point } from './point';

export class Rectangle {
  private constructor(
    readonly left: number,
    readonly top: number,
    readonly right: number,
    readonly bottom: number) { }

  public static create(x: number, y: number, width: number, height: number): Rectangle {
    return new Rectangle(x, y, x + width, y + height);
  }

  public static createFromBounds(left: number, top: number, right: number, bottom: number): Rectangle {
    return Rectangle.create(left, top, right - left, bottom - top);
  }

  get x(): number {
    return this.left;
  }

  get y(): number {
    return this.top;
  }

  get width(): number {
    return this.right - this.left;
  }

  get height(): number {
    return this.bottom - this.top;
  }

  clone(): Rectangle {
    return Rectangle.create(this.x, this.y, this.width, this.height);
  }

  translate(offsetX: number, offsetY: number): Rectangle {
    return Rectangle.create(
      this.x + offsetX,
      this.y + offsetY,
      this.width,
      this.height
    )
  }

  scale(factor: number): Rectangle {
    return Rectangle.create(
      this.x * factor,
      this.y * factor,
      this.width * factor,
      this.height * factor
    )
  }

  center(): Point {
    const x = this.x + (this.width / 2);
    const y = this.y + (this.height / 2);

    return Point.create(x, y);
  }

  isEmpty(): boolean {
    return this.width <= 0 || this.height <= 0;
  }

  equals(other: Rectangle): boolean {
    return (this.isEmpty() && other.isEmpty() ||
      this.top == other.top &&
      this.left == other.left &&
      this.bottom == other.bottom &&
      this.right == other.right);
  }

  toString() {
    return `(${this.x}, ${this.y}, ${this.width}, ${this.height})`;
  }
}
