import { Injectable } from '@angular/core';
import { Position, Rectangle, PlacementStrategy } from '../services/interfaces';
import { SimpleBox } from './../models/simple-box';
import { WindowBox } from './../models/window-box';
import { BoxService } from '../services/box.service';

@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(
    private boxService: BoxService) { }

  getId() {
    return "bottom";
  }

  calculate(trigger: Rectangle, element: Rectangle): Rectangle {
    const bottomCenterRect: Rectangle = this.boxService.calculateBottomCenterPosition(
      trigger,
      element
    );

    const flippedRect: Rectangle = this.boxService.flipHorizontally(
      trigger,
      bottomCenterRect
    );

    const insideParentRect: Rectangle = this.boxService.calculatePlacementInsideParent(
      flippedRect,
      WindowBox.create(window)
    );

    return insideParentRect;
  }
}
