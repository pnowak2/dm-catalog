export class Bounds {
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
  ): Bounds {
    return new Bounds(left, top, right, bottom);
  }

  equals(other: Bounds): boolean {
    return this.left == other.left &&
      this.top == other.top &&
      this.bottom == other.bottom &&
      this.right == other.right;
  }

  toString() {
    return `(${this.left}, ${this.top}, ${this.right}, ${this.bottom})`;
  }
}
