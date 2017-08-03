export class Position {
  top: number;
  left: number;
}

export class Popover {
  effectivePlacement: string;

  arrowPosition: Position = {
    top: 0,
    left: 0
  }

  containerPosition: Position = {
    top: 0,
    left: 0
  }
}
