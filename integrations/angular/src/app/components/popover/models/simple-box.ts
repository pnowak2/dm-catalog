import { Box, Position, Dimension } from './../services/interfaces';

export class SimpleBox implements Box {
  constructor(public position: Position, public dimension: Dimension) { }
}
