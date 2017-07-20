import { Box, Position, Dimensions } from './../services/interfaces';

export class SimpleBox implements Box {
  private constructor(public position: Position, public dimensions: Dimensions) { }

  public static create(position: Position, dimension: Dimensions): Box {
    return new SimpleBox(position, dimension);
  }
}
