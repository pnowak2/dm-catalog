export class Point {
  private constructor(readonly x: number, readonly y: number) { }

  public static create(x: number, y: number): Point {
    return new Point(x, y);
  }

  clone(): Point {
    return Point.create(this.x, this.y);
  }

  translate(x: number, y: number): Point {
    const newX = this.x + x;
    const newY = this.y + y;

    return Point.create(newX, newY);
  }

  scale(factor: number): Point {
    const newX = this.x * factor;
    const newY = this.y * factor;

    return Point.create(newX, newY);
  }

  isZero(): boolean {
    return this.equals(0, 0);
  }

  equals(x: number, y: number): boolean {
    return this.x === x && this.y === y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
