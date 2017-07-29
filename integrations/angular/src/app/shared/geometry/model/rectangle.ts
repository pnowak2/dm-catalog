import { Point } from './point';
import { Overflow } from './overflow';

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

  moveTo(p: Point, anchor: Point = this.leftTop()): Rectangle {
    this.x = p.x + (this.x - anchor.x);
    this.y = p.y + (this.y - anchor.y);

    return this;
  }

  translate(offsetX: number, offsetY: number): Rectangle {
    this.left += offsetX;
    this.top += offsetY;
    this.right += offsetX;
    this.bottom += offsetY;

    return this;
  }

  translateX(offsetX: number): Rectangle {
    return this.translate(offsetX, 0);
  }

  translateY(offsetY: number): Rectangle {
    return this.translate(0, offsetY);
  }

  scale(factor: number): Rectangle {
    this.left *= factor;
    this.top *= factor;
    this.right *= factor;
    this.bottom *= factor;

    return this;
  }

  flipX(yAxis: number): Rectangle {
    const offsetY = 2 * (this.top - yAxis) + this.height;

    return this.translate(0, -offsetY);
  }

  flipY(xAxis: number): Rectangle {
    const offsetX = 2 * (this.left - xAxis) + this.width;

    return this.translate(-offsetX, 0);
  }

  flip(point: Point): Rectangle {
    return this
      .flipX(point.y)
      .flipY(point.x);
  }

  map(fn: (number) => number) {
    this.left = fn.call(this, this.left);
    this.top = fn.call(this, this.top);
    this.right = fn.call(this, this.right);
    this.bottom = fn.call(this, this.bottom);

    return this;
  }

  leftTop(): Point {
    return Point.create(this.left, this.top);
  }

  centerTop(): Point {
    return Point.create(this.left + (this.width / 2), this.top);
  }

  rightTop(): Point {
    return Point.create(this.right, this.top);
  }

  leftCenter(): Point {
    const x = this.x;
    const y = this.y + (this.height / 2);

    return Point.create(x, y);
  }

  center(): Point {
    const x = this.x + (this.width / 2);
    const y = this.y + (this.height / 2);

    return Point.create(x, y);
  }

  rightCenter(): Point {
    const x = this.x + this.width;
    const y = this.y + (this.height / 2);

    return Point.create(x, y);
  }

  leftBottom(): Point {
    return Point.create(this.left, this.bottom);
  }

  centerBottom(): Point {
    return Point.create(this.left + (this.width / 2), this.bottom);
  }

  rightBottom(): Point {
    return Point.create(this.right, this.bottom);
  }

  isEmpty(): boolean {
    return this.width <= 0 || this.height <= 0;
  }

  containsRect(other: Rectangle): boolean {
    if (other.isEmpty()) return true;
    if (this.isEmpty()) return false;

    return other.left >= this.left &&
      other.top >= this.top &&
      other.right <= this.right &&
      other.bottom <= this.bottom;
  }

  containsPoint(point: Point): boolean {
    if (this.isEmpty()) return false;

    return point.x >= this.left &&
      point.x <= this.right &&
      point.y >= this.top &&
      point.y <= this.bottom;
  }

  overflows(other: Rectangle): boolean {
    return this.overflowsLeft(other) ||
      this.overflowsTop(other) ||
      this.overflowsRight(other) ||
      this.overflowsBottom(other);
  }

  overflowsLeft(other: Rectangle): boolean {
    return this.overflow(other).left > 0;
  }

  overflowsTop(other: Rectangle): boolean {
    return this.overflow(other).top > 0;
  }

  overflowsRight(other: Rectangle): boolean {
    return this.overflow(other).right > 0;
  }

  overflowsBottom(other: Rectangle): boolean {
    return this.overflow(other).bottom > 0;
  }

  overflow(other: Rectangle): Overflow {
    return Overflow.create(
      Math.max(0, other.left - this.left),
      Math.max(0, other.top - this.top),
      Math.max(0, this.right - other.right),
      Math.max(0, this.bottom - other.bottom)
    )
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

  blend(rect: Rectangle, scalar: number): Rectangle {
    return Rectangle.fromBounds(
      this.left + (rect.left - this.left) * scalar,
      this.top + (rect.top - this.top) * scalar,
      this.right + (rect.right - this.right) * scalar,
      this.bottom + (rect.bottom - this.bottom) * scalar
    );
  }

  inflate(xScale: number, yScale: number = xScale): Rectangle {
    const xAdjust = (this.width * xScale - this.width) / 2
    const yAdjust = (this.height * yScale - this.height) / 2

    this.left -= xAdjust;
    this.right += xAdjust;
    this.top -= yAdjust;
    this.bottom += yAdjust;

    return this;
  }

  expandToIntegers(): Rectangle {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);

    return this;
  }

  relativePositionTo(parent: Rectangle): Point {
    return Point.create(
      this.left - parent.left,
      this.top - parent.top
    );
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
