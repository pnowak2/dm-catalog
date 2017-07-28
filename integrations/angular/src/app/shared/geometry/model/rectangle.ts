import { Dimensions } from './dimensions';
import { Point } from './point';

export class Rectangle {
  private constructor(
    public left: number,
    public top: number,
    public right: number,
    public bottom: number) {
  }

  public static create(x: number, y: number, width: number, height: number): Rectangle {
    return new Rectangle(x, y, x + width, y + height);
  }

  public static fromBounds(left: number, top: number, right: number, bottom: number): Rectangle {
    return Rectangle.create(left, top, right - left, bottom - top);
  }

  public static fromRect(rect: Rectangle): Rectangle {
    return Rectangle.create(rect.x, rect.y, rect.width, rect.height);
  }

  public static empty(): Rectangle {
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
    this.x = x;
    this.y = y;

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

  map(fn: (number) => number) {
    this.left = fn.call(this, this.left);
    this.top = fn.call(this, this.top);
    this.right = fn.call(this, this.right);
    this.bottom = fn.call(this, this.bottom);

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

  intersects(other: Rectangle): boolean {
    if (this.isEmpty() || other.isEmpty())
      return false;

    return this.left < other.right &&
      this.right > other.left &&
      this.top < other.bottom &&
      this.bottom > other.top
  }

  intersect(other: Rectangle): Rectangle {
    return this
      .clone()
      .restrictTo(other);
  }

  union(other: Rectangle): Rectangle {
    return this
      .clone()
      .expandToContain(other);
  }

  restrictTo(other: Rectangle): Rectangle {
    if (this.isEmpty() || other.isEmpty())
      return this.setRectangle(0, 0, 0, 0);

    const left = Math.max(this.left, other.left);
    const top = Math.max(this.top, other.top);
    const right = Math.min(this.right, other.right);
    const bottom = Math.min(this.bottom, other.bottom);

    return this.setRectangle(left, top, Math.max(0, right - left), Math.max(0, bottom - top));
  }

  expandToContain(other: Rectangle): Rectangle {
    if (this.isEmpty()) return this.copyFrom(other);
    if (other.isEmpty()) return this;

    const left = Math.min(this.left, other.left);
    const top = Math.min(this.top, other.top);
    const right = Math.max(this.right, other.right);
    const bottom = Math.max(this.bottom, other.bottom);

    return this.setRectangle(left, top, right - left, bottom - top);
  }

  translateInside(other: Rectangle): Rectangle {
    let offsetX = 0;
    let offsetY = 0;

    if (this.left <= other.left) {
      offsetX = other.left - this.left;
    }

    if (this.right >= other.right) {
      offsetX = other.right - this.right;
    }

    if (this.top <= other.top) {
      offsetY = other.top - this.top;
    }

    if (this.bottom >= other.bottom) {
      offsetY = other.bottom - this.bottom;
    }

    return this.translate(offsetX, offsetY);
  }

  expandToIntegers(): Rectangle {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);

    return this;
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
