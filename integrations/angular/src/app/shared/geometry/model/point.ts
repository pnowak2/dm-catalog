export class Point {
  private constructor(readonly x: number, readonly y: number) { }

  public static create(x: number, y: number): Point {
    return new Point(x, y);
  }

  clone(): Point {
    return Point.create(this.x, this.y);
  }

  translate(offsetX: number, offsetY: number): Point {
    const newX = this.x + offsetX;
    const newY = this.y + offsetY;

    return Point.create(newX, newY);
  }

  scale(factor: number): Point {
    const newX = this.x * factor;
    const newY = this.y * factor;

    return Point.create(newX, newY);
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
