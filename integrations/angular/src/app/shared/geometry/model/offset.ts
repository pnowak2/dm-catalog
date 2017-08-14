import { Position } from './../interface/position';

export class Offset implements Position {
  private constructor(
    public x: number,
    public y: number
  ) { }

  public static create(
    x: number,
    y: number
  ): Offset {
    return new Offset(x, y);
  }

  equals(other: Offset): boolean {
    return this.x === other.x &&
      this.y === other.y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}
