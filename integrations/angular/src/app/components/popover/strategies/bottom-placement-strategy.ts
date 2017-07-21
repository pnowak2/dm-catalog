import { Injectable } from '@angular/core';
import { Position, Rectangle, PlacementStrategy } from '../interfaces/interfaces';
import { WindowBox } from './../models/window-box';
import { RectangleService } from '../services/rectangle.service';

@Injectable()
export class BottomPlacementStrategy implements PlacementStrategy {
  constructor(
    private rectangleService: RectangleService) { }

  getId() {
    return "bottom";
  }

  calculate(ref: Rectangle, element: Rectangle): Rectangle {
    const bottomCenterRect: Rectangle = this.rectangleService.calculateBottomCenterPosition(
      ref,
      element
    );

    const flippedRect: Rectangle = this.rectangleService.flipHorizontally(
      ref,
      bottomCenterRect
    );

    const insideParentRect: Rectangle = this.rectangleService.calculatePlacementInsideParent(
      flippedRect,
      WindowBox.create()
    );

    return insideParentRect;
  }
}
