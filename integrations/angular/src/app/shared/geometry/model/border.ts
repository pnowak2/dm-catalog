import { Bounds } from './../interface/bounds';

export class Border implements Bounds {
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
  ): Border {
    return new Border(left, top, right, bottom);
  }

  public static empty(): Border {
    return Border.create(0, 0, 0, 0);
  }

  scale(factor: number): Border {
    this.left *= factor;
    this.top *= factor;
    this.right *= factor;
    this.bottom *= factor;

    return this;
  }

  clone(): Border {
    return Border.create(this.left, this.top, this.right, this.bottom);
  }

  equals(other: Border): boolean {
    return this.left === other.left &&
      this.top === other.top &&
      this.bottom === other.bottom &&
      this.right === other.right;
  }

  toString() {
    return `(${this.left}, ${this.top}, ${this.right}, ${this.bottom})`;
  }
}
