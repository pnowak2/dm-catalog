export class Overflow {
  private constructor(
    public left: number,
    public top: number,
    public right: number,
    public bottom: number
  ) { }

  public static create(
    left: number,
    top: number,
    right: number,
    bottom: number
  ): Overflow {
    return new Overflow(left, top, right, bottom);
  }

  equals(other: Overflow): boolean {
    return this.left === other.left &&
      this.top === other.top &&
      this.bottom === other.bottom &&
      this.right === other.right;
  }

  toString() {
    return `(${this.left}, ${this.top}, ${this.right}, ${this.bottom})`;
  }
}
