import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POSITION_SERVICE, RECTANGLE_SERVICE, PLACEMENT_STRATEGY } from './coordinates.config';
import { BottomPlacementStrategy } from './services/position/strategies/bottom-placement-strategy';
import { RightPlacementStrategy } from './services/position/strategies/right-placement-strategy';
import { DefaultRectangleService } from './services/rectangle/default-rectangle.service';
import { PositionServiceImpl } from './services/position/position.service';

@NgModule({
  imports: [CommonModule],
  exports: [],
  declarations: [],
  providers: [
    { provide: POSITION_SERVICE, useClass: PositionServiceImpl },
    { provide: RECTANGLE_SERVICE, useClass: DefaultRectangleService },
    { provide: PLACEMENT_STRATEGY, useClass: BottomPlacementStrategy, multi: true },
    { provide: PLACEMENT_STRATEGY, useClass: RightPlacementStrategy, multi: true },
  ]
})
export class CoordinatesModule { }
