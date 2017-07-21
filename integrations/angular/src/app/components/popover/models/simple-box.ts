import { Rectangle, Position, Dimensions } from './../interfaces/interfaces';

export class SimpleBox implements Rectangle {
  private constructor(public position: Position, public dimensions: Dimensions) { }

  public static create(position: Position, dimension: Dimensions): Rectangle {
    return new SimpleBox(position, dimension);
  }
}
