import { Dimensions } from './dimensions';
import { Point } from './point';

export class Rectangle {
  left: number;
  top: number;
  right: number;
  bottom: number;

  private constructor(
    left: number,
    top: number,
    right: number,
    bottom: number) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }

  public static create(x: number, y: number, width: number, height: number): Rectangle {
    return new Rectangle(x, y, x + width, y + height);
  }

  public static createFromBounds(left: number, top: number, right: number, bottom: number): Rectangle {
    return Rectangle.create(left, top, right - left, bottom - top);
  }

  public static createEmpty(): Rectangle {
    return Rectangle.create(0, 0, 0, 0);
  }

  get x(): number {
    return this.left;
  }

  set x(newX) {
    const offsetX = newX - this.x;

    this.left = newX;
    this.right += offsetX;
  }

  get y(): number {
    return this.top;
  }

  set y(newY) {
    const offsetY = newY - this.y;

    this.top = newY;
    this.bottom += offsetY;
  }

  get width(): number {
    return this.right - this.left;
  }

  set width(newWidth) {
    this.right = this.left + newWidth;
  }

  get height(): number {
    return this.bottom - this.top;
  }

  set height(newWidth) {
    this.bottom = this.top + newWidth;
  }

  clone(): Rectangle {
    return Rectangle.create(this.x, this.y, this.width, this.height);
  }

  setRectangle(x: number, y: number, width: number, height: number): Rectangle {
    this.left = x;
    this.top = y;
    this.right = x + width;
    this.bottom = y + height;

    return this;
  }

  setBounds(left: number, top: number, right: number, bottom: number): Rectangle {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;

    return this;
  }

  copyFrom(other: Rectangle): Rectangle {
    this.left = other.left;
    this.top = other.top;
    this.right = other.right;
    this.bottom = other.bottom;

    return this;
  }

  moveTo(x: number, y: number): Rectangle {
    const offsetX = x - this.left;
    const offsetY = y - this.top;

    this.left = x;
    this.top = y;
    this.right += offsetX;
    this.bottom += offsetY;

    return this;
  }

  translate(offsetX: number, offsetY: number): Rectangle {
    this.left += offsetX;
    this.top += offsetY;
    this.right += offsetX;
    this.bottom += offsetY;

    return this;
  }

  scale(factor: number): Rectangle {
    this.left *= factor;
    this.top *= factor;
    this.right *= factor;
    this.bottom *= factor;

    return this;
  }

  center(): Point {
    const x = this.x + (this.width / 2);
    const y = this.y + (this.height / 2);

    return Point.create(x, y);
  }

  isEmpty(): boolean {
    return this.width <= 0 || this.height <= 0;
  }

  contains(other: Rectangle): boolean {
    if (other.isEmpty()) return true;
    if (this.isEmpty()) return false;

    return other.left >= this.left &&
      other.top >= this.top &&
      other.right <= this.right &&
      other.bottom <= this.bottom;
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
