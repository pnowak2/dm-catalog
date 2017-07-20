import { Box, Position, Dimension } from './../services/interfaces';

export class SimpleBox implements Box {
  private constructor(public position: Position, public dimension: Dimension) { }

  public static create(position: Position, dimension: Dimension): Box {
    return new SimpleBox(position, dimension);
  }
}
